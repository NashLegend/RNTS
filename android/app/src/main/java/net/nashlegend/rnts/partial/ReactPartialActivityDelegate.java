package net.nashlegend.rnts.partial;

import android.annotation.TargetApi;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.KeyEvent;

import com.facebook.infer.annotation.Assertions;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactRootView;
import com.facebook.react.Utils;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.PermissionListener;

import javax.annotation.Nullable;

/**
 * @author 潘志会 @ Zhihu Inc.
 * @since 01-24-2017
 */
public class ReactPartialActivityDelegate {

    private final
    @Nullable
    Activity mActivity;
    private final
    @Nullable
    FragmentActivity mFragmentActivity;

    private
    @Nullable
    ReactRootView mReactRootView;
    private
    @Nullable
    PermissionListener mPermissionListener;

    public ReactPartialActivityDelegate(Activity activity) {
        mActivity = activity;
        mFragmentActivity = null;
    }

    public ReactPartialActivityDelegate(FragmentActivity fragmentActivity) {
        mFragmentActivity = fragmentActivity;
        mActivity = null;
    }

    protected
    @Nullable
    Bundle getLaunchOptions() {
        return null;
    }

    protected ReactRootView createRootView() {
        return new ReactRootView(getContext());
    }

    /**
     * Get the {@link ReactNativeHost} used by this app. By default, assumes
     * {@link Activity#getApplication()} is an instance of {@link ReactApplication} and calls
     * {@link ReactApplication#getReactNativeHost()}. Override this method if your application class
     * does not implement {@code ReactApplication} or you simply have a different mechanism for
     * storing a {@code ReactNativeHost}, e.g. as a static field somewhere.
     */
    public ReactNativeHost getReactNativeHost() {
        return ((ReactApplication) getPlainActivity().getApplication()).getReactNativeHost();
    }

    public ReactInstanceManager getReactInstanceManager() {
        return getReactNativeHost().getReactInstanceManager();
    }

    public void onCreate(Bundle savedInstanceState) {
        Utils.GetRedBoxPermissionIfNeeded(getPlainActivity(), getReactNativeHost());
    }

    public void onPause() {
        if (getReactNativeHost().hasInstance()) {
            getReactNativeHost().getReactInstanceManager().onHostPause(getPlainActivity());
        }
    }

    public void onResume() {
        if (getReactNativeHost().hasInstance()) {
            getReactNativeHost().getReactInstanceManager()
                    .onHostResume(getPlainActivity(),
                            (DefaultHardwareBackBtnHandler) getPlainActivity());
        }
    }

    public void onDestroy() {
        if (mReactRootView != null) {
            mReactRootView.unmountReactApplication();
            mReactRootView = null;
        }
        if (getReactNativeHost().hasInstance()) {
            getReactNativeHost().getReactInstanceManager().onHostDestroy(getPlainActivity());
        }
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (getReactNativeHost().hasInstance()) {
            getReactNativeHost().getReactInstanceManager()
                    .onActivityResult(getPlainActivity(), requestCode, resultCode, data);
        }
    }

    public boolean onKeyUp(int keyCode, KeyEvent event) {
        return Utils.onKeyUp(getPlainActivity(), getReactNativeHost(), keyCode);
    }

    public boolean onBackPressed() {
        if (getReactNativeHost().hasInstance()) {
            getReactNativeHost().getReactInstanceManager().onBackPressed();
            return true;
        }
        return false;
    }

    public boolean onNewIntent(Intent intent) {
        if (getReactNativeHost().hasInstance()) {
            getReactNativeHost().getReactInstanceManager().onNewIntent(intent);
            return true;
        }
        return false;
    }

    @TargetApi(Build.VERSION_CODES.M)
    public void requestPermissions(String[] permissions, int requestCode,
                                   PermissionListener listener) {
        mPermissionListener = listener;
        getPlainActivity().requestPermissions(permissions, requestCode);
    }

    public void onRequestPermissionsResult(int requestCode, String[] permissions,
                                           int[] grantResults) {
        if (mPermissionListener != null && mPermissionListener.onRequestPermissionsResult(
                requestCode, permissions, grantResults)) {
            mPermissionListener = null;
        }
    }

    private Context getContext() {
        if (mActivity != null) {
            return mActivity;
        }
        return Assertions.assertNotNull(mFragmentActivity);
    }

    private Activity getPlainActivity() {
        return ((Activity) getContext());
    }
}
