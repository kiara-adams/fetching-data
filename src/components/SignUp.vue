<template>
    <div id="parent">
        <form @submit.prevent="formSubmit" class="signup-form">
            <h1>SignUp Form hehe</h1>
            <div class="form-group">
                <label>Email:</label>
                <input type="email" required v-model="email">
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input type="password" required v-model="password">
            </div>
            <div class="form-group">
                <label>Role:</label>
                <select v-model="role" required>
                    <option value="">Select a role</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Web Designer</option>
                </select>
            </div>
            <div class="form-group">
                <label>Languages:</label>
                <input type="text" v-model="currentLanguage">
                <button type="button" @click="addLanguage">Add Language</button>
            </div>
            <div class="languages-list">
                <div v-for="(lang, index) in languages" :key="index" class="language-item">
                    <p @click="deleteLang(lang)">
                        {{ index+1 }}: {{ lang }}
                    </p>
                </div>
            </div>
            <div class="form-group">
                <input type="checkbox" v-model="terms" required>
                <label>Accept Terms and Conditions</label>
            </div>
            <h4>People wanted in your team:</h4>
            <div class="people-list">
                <div>
                    <input type="checkbox" value="Mario" v-model="names">
                    <label>Mario</label>
                </div>
                <div>
                    <input type="checkbox" value="Dean" v-model="names">
                    <label>Dean</label>
                </div>
                <div>
                    <input type="checkbox" value="Luigi" v-model="names">
                    <label>Luigi</label>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div class="form-preview">
            <p>Email: {{ email }}</p>
            <p>Password: {{ password }}</p>
            <p>Role: {{ role }}</p>
            <p>Terms: {{ terms }}</p>
            <p>People: {{ names }}</p>
            <p>Current Language: {{ currentLanguage }}</p>
            <p>Languages: {{ languages }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            names: [],
            currentLanguage: '',
            languages: []
        }
    },
    methods: {
        addLanguage() {
            if (this.currentLanguage && !this.languages.includes(this.currentLanguage.trim())) {
                this.languages.push(this.currentLanguage.trim());
                this.currentLanguage = ''; // Clear input after adding language
            }
        },
        deleteLang(lang) {
            this.languages = this.languages.filter(item => item !== lang);
        },
        formSubmit() {
            console.log('Form submitted');
            // Reset form fields and data
            this.email = '';
            this.password = '';
            this.role = '';
            this.terms = false;
            this.names = [];
            this.currentLanguage = '';
            this.languages = [];
        }
    }
}
</script>

<style scoped>
#parent {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ff9ced;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.signup-form {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.languages-list {
    margin-top: 15px;
}

.language-item {
    cursor: pointer;
    padding: 5px 10px;
    background-color: #f0f0f0;
    margin-bottom: 5px;
}

.people-list {
    margin-top: 10px;
}

.form-preview {
    margin-top: 20px;
}

.form-preview p {
    margin-bottom: 5px;
}
</style>
