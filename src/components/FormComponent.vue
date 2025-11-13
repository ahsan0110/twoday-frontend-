<script>
export default {
    name: "FormComponent"
}
</script>

<template>
    <div class="form-section">
        <div class="form-section-left">
            <h1 class="mainText">Let's talk about <br>the future</h1>
            <p>Contact us through the form and let's talk about what we can <br>accomplish together.</p>
            <a class="staff-link" href="">Get in touch</a>
        </div>
        <div class="form-section-right">
            <form action="">
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First name*</label>
                        <input type="text" id="firstName" placeholder="First name" required />
                    </div>

                    <div class="form-group">
                        <label for="lastName">Last name*</label>
                        <input type="text" id="lastName" placeholder="Last name" required />
                    </div>
                </div>
                <label style="display: block;" for="email">Email*</label>
                <input type="email">
                <label style="display: block;" for="text">Company Name*</label>
                <input type="email">
                <label style="display: block;" for="text">Job Title*</label>
                <input type="email">
                <label style="display: block;" for="country">Country*</label>
                <select id="country" name="country" required>
                    <option value="">Select your country</option>
                    <option value="PK">Pakistan</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
                <label style="display: block;" for="text">Message*</label>
                <input id="form-message" type="text">
                <p>When you provide your personal info above, Twoday will process it in according with our privacy policy.</p>
                 <a class="staff-link" href="">Submit </a>
            </form>
        </div>
    </div>
</template>