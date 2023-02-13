package com.who_i_am_rn;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule{
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "New Event" );
        return constants;
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Promise promise) {
        try {
            Integer eventId = 33;
            promise.resolve(eventId);
            Log.d("CalendarModule", "Create event called with name : " + name + " and location: " + location);
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

}
