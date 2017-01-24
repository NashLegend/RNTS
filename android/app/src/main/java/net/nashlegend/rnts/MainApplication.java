package net.nashlegend.rnts;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import net.nashlegend.rnts.BuildConfig;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

	private static ReactContext mReactContext;

	public static ReactContext getReactContext() {
		return mReactContext;
	}

	private static ReactNativeHost sReactNativeHost;

	public static ReactNativeHost getReactHost() {
		return sReactNativeHost;
	}

	private ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

		@Override protected boolean getUseDeveloperSupport() {
			return BuildConfig.DEBUG;
		}

		@Override protected List<ReactPackage> getPackages() {
			return Arrays.<ReactPackage>asList(new MainReactPackage());
		}
	};

	@Override public ReactNativeHost getReactNativeHost() {
		return mReactNativeHost;
	}

	@Override public void onCreate() {
		super.onCreate();
		SoLoader.init(this, /* native exopackage */ false);
		sReactNativeHost = mReactNativeHost;
		registerReactInstanceEventListener();
	}

	private void registerReactInstanceEventListener() {
		mReactNativeHost.getReactInstanceManager()
			.addReactInstanceEventListener(mReactInstanceEventListener);
	}

	private void unRegisterReactInstanceEventListener() {
		mReactNativeHost.getReactInstanceManager()
			.removeReactInstanceEventListener(mReactInstanceEventListener);
	}

	private final ReactInstanceManager.ReactInstanceEventListener mReactInstanceEventListener =
		new ReactInstanceManager.ReactInstanceEventListener() {
			@Override public void onReactContextInitialized(ReactContext context) {
				mReactContext = context;
			}
		};
}
