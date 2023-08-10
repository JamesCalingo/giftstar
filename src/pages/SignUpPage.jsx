import React from "react";
import InputField from "../components/InputField";

export default function SignUp() {
    return <>
        <h1>Sign Up</h1>
        <div className="card">

            <InputField name="email" type="email" label="Email" />
            <InputField name="password" type="password" label="Password" />
            <InputField name="confirmPassword" type="password" label="Confirm Password" />
            <InputField name="firstName" label="First Name" />
            <InputField name="lastName" label="Last Name" />

            <a href="/account">
                <button>Sign Up</button>
            </a>
        </div>

    </>
}