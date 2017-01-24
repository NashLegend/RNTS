package net.nashlegend.rnts.partial;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import net.nashlegend.rnts.MainApplication;

/**
 * A simple {@link Fragment} subclass.
 */
public abstract class ReactFragment extends Fragment {

	private ReactRootView mReactRootView;
	private ReactInstanceManager mReactInstanceManager;

	@Override public void onAttach(Context context) {
		super.onAttach(context);
		mReactRootView = new ReactRootView(context);
		mReactInstanceManager = MainApplication.getReactHost().getReactInstanceManager();
	}

	@Nullable @Override
	public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container,
		@Nullable Bundle savedInstanceState) {
		return mReactRootView;
	}

	@Override public void onActivityCreated(@Nullable Bundle savedInstanceState) {
		super.onActivityCreated(savedInstanceState);
		mReactRootView.startReactApplication(mReactInstanceManager, getMainPageName(), null);
	}

	@Override public void onDestroy() {
		if (mReactRootView != null) {
			mReactRootView.unmountReactApplication();
			mReactRootView = null;
		}
		super.onDestroy();
	}

	protected abstract String getMainPageName();
}
