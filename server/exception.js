class PasswordUnMatched extends Error {
	toJson(){
		errorType: "PASSWORD_UNMATCHED",
        errorMessage: "Passwords are not matched."
	}
}

module.exports.PasswordUnMatched = PasswordUnMatched;