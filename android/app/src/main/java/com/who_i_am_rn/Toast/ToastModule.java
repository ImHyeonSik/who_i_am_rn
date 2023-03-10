package com.who_i_am_rn.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.content.Context;
import android.widget.Toast;

import java.util.HashMap;
import java.util.Map;

public class ToastModule extends  ReactContextBaseJavaModule{
    ToastModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("SHORT", Toast.LENGTH_SHORT);
        constants.put("LONG", Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration) {
        ReactApplicationContext context = getReactApplicationContext();
        Toast toast = Toast.makeText((Context) context, (CharSequence) message, duration);
        toast.show();
    }
}
