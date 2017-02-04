package net.nashlegend.rnts;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import net.nashlegend.rnts.events.Talk;

import org.greenrobot.eventbus.EventBus;

/**
 * @author 潘志会 @ Zhihu Inc.
 * @since 02-04-2017
 */

public class InfoReactModule extends ReactContextBaseJavaModule {
    public InfoReactModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "InfoTalk";
    }

    @ReactMethod
    public void talkToYou(int times, String message) {
        EventBus.getDefault().post(new Talk(times, message));
    }

    @ReactMethod
    public void echoPlease(int times, String message, Callback callback) {
//        EventBus.getDefault().post(new Talk(times, message));
        callback.invoke(times + 1, "got it");
    }
}
