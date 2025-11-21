<script>

import emailjs from "@emailjs/browser";

export default {

    name: "FormComponent",
    props: {
        formTextClass: { type: String, default: "mainText" },
        formParaClass: { type: String, default: "form-para" },
        formSectionClass: { type: String, default: "form-section" },

        mainText: { type: String, default: "Let's talk about <br>the future" },
        mainPara: { type: String, default: "Contact us through the form and let's talk about what we can <br>accomplish together" },

    },
    data() {
        return {
            form: {
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                jobTitle: "",
                country: "",
                message: "",
            },
            status: "",
        };
    },
    methods: {
        async sendEmail() {
            const templateParams = {
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                email: this.form.email,
                company: this.form.company,
                jobTitle: this.form.jobTitle,
                country: this.form.country,
                message: this.form.message,
            };

            try {
                await emailjs.send(
                    "service_t2nsacb",
                    "template_sk97u5c",
                    templateParams,
                    "CM6BvY7N5eu5KjNZW"
                );

                this.status = "Your message has been sent.";

                this.form = {
                    firstName: "",
                    lastName: "",
                    email: "",
                    company: "",
                    jobTitle: "",
                    country: "",
                    message: "",
                };
            } catch (err) {
                console.error(err);
                this.status = "Something went wrong. Try again.";
            }
        },
    },
};
</script>

<template>
    <div id="form-section-id" :class="formSectionClass">
        <div :class="['form-section-left', formTextClass]">
            <h1 class="mainText" v-html="mainText"></h1>
            <p :class="formParaClass" v-html="mainPara"></p>
            <a class="staff-link contact-form-a" href="/extra">Get in touch</a>
        </div>
        <div class="form-section-right">
            <form @submit.prevent="sendEmail">
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName" required>First name*</label>
                        <input v-model="form.firstName" name="firstName" type="text" id="firstName"
                            placeholder="First name" required />
                    </div>

                    <div class="form-group">
                        <label for="lastName" required>Last name*</label>
                        <input v-model="form.lastName" name="lastName" type="text" id="lastName" placeholder="Last name"
                            required />
                    </div>
                </div>
                <label style="display: block;" for="email" required>Email*</label>
                <input v-model="form.email" name="email" type="email" placeholder="example@gmail.com">
                <label style="display: block;" for="text" required>Company Name*</label>
                <input v-model="form.company" name="company" type="text" placeholder="Stech">
                <label style="display: block;" for="text" required>Job Title*</label>
                <input v-model="form.jobTitle" name="jobTitle" type="text" placeholder="web developer">
                <label style="display: block;" for="country" required>Country*</label>
                <select v-model="form.country" id="country" name="country" required>
                    <option value="">Select your country</option>
                    <option value="PK">Pakistan</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
                <label style="display: block;" for="text">Message*</label>
                <textarea v-model="form.message" name="message" id="form-message" placeholder="Write your message..."
                    rows="6" required></textarea>
                <p>When you provide your personal info above, Twoday will process it in according with our privacy
                    policy.</p>
                <button type="submit" class="staff-link">Submit </button> <p>{{ status }}</p>
            </form>
        </div>
    </div>
</template>