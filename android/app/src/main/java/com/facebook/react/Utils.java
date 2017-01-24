package com.facebook.react;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.provider.Settings;
import android.view.KeyEvent;
import android.widget.Toast;

import com.facebook.common.logging.FLog;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.devsupport.DoubleTapReloadRecognizer;

/**
 * @author 潘志会 @ Zhihu Inc.
 * @since 01-24-2017
 */

public class Utils {
    private static final String REDBOX_PERMISSION_MESSAGE =
            "Overlay permissions needs to be granted in order for react native apps to run in dev mode";
    private static DoubleTapReloadRecognizer mDoubleTapReloadRecognizer =
            new DoubleTapReloadRecognizer();

    public static void GetRedBoxPermissionIfNeeded(Context context, ReactNativeHost host) {
        if (host.getUseDeveloperSupport() && Build.VERSION.SDK_INT >= 23) {
            if (!Settings.canDrawOverlays(context)) {
                Intent serviceIntent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
                if (!(context instanceof Activity)) {
                    serviceIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                }
                context.startActivity(serviceIntent);
                FLog.w(ReactConstants.TAG, REDBOX_PERMISSION_MESSAGE);
                Toast.makeText(context, REDBOX_PERMISSION_MESSAGE, Toast.LENGTH_LONG).show();
            }
        }
    }

    public static boolean onKeyUp(Activity activity, ReactNativeHost host, int keyCode) {
        if (host.hasInstance() && host.getUseDeveloperSupport()) {
            if (keyCode == KeyEvent.KEYCODE_MENU) {
                host.getReactInstanceManager().showDevOptionsDialog();
                return true;
            }
            boolean didDoubleTapR =
                    mDoubleTapReloadRecognizer.didDoubleTapR(keyCode, activity.getCurrentFocus());
            if (didDoubleTapR) {
                host.getReactInstanceManager().getDevSupportManager().handleReloadJS();
                return true;
            }
        }
        return false;
    }
}
