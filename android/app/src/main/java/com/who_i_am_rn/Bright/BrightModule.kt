package com.who_i_am_rn.Bright

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class BrightModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "BrightModule"
    }

    override fun getConstants(): MutableMap<String, Any> {
        val constants = HashMap<String, Any>()
        constants.put("SAMPLE_VALUE", "Hello Kotlin")
        return constants
    }

    @ReactMethod
    fun getBright(promise: Promise) {
        val activity = currentActivity!!
        val lp = activity.window.attributes
        promise.resolve(lp.screenBrightness)
    }

    @ReactMethod
    fun setBright(brightness: Float) {
        val activity = currentActivity!!
        activity.runOnUiThread{
            val lp = activity.window.attributes
            lp.screenBrightness = brightness
            activity.window.attributes = lp
        }
    }

}