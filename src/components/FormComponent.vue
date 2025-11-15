<script>
export default {
    name: "FormComponent",
    props: {
        formTextClass: { type: String, default: "mainText" },
        formParaClass: { type: String, default: "form-para" },
        formSectionClass: { type: String, default: "form-section" },

        mainText: { type: String, default: "Let's talk about <br>the future" },
        mainPara: { type: String, default: "Contact us through the form and let's talk about what we can <br>accomplish together" },

    }
}
</script>

<template>
    <div id="form-section-id" :class="formSectionClass">
        <div :class="['form-section-left', formTextClass]">
            <h1 class="mainText" v-html="mainText"></h1>
            <p :class="formParaClass" v-html="mainPara"></p>
            <a class="staff-link" href="">Get in touch</a>
        </div>
        <div class="form-section-right">
            <form action="">
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName" required>First name*</label>
                        <input type="text" id="firstName" placeholder="First name" required />
                    </div>

                    <div class="form-group">
                        <label for="lastName" required>Last name*</label>
                        <input type="text" id="lastName" placeholder="Last name" required />
                    </div>
                </div>
                <label style="display: block;" for="email" required>Email*</label>
                <input type="email">
                <label style="display: block;" for="text" required>Company Name*</label>
                <input type="email">
                <label style="display: block;" for="text" required>Job Title*</label>
                <input type="email">
                <label style="display: block;" for="country" required>Country*</label>
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
                <p>When you provide your personal info above, Twoday will process it in according with our privacy
                    policy.</p>
                <a class="staff-link" href="">Submit </a>
            </form>
        </div>
    </div>
</template>