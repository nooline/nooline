define([],function(){var o=window.Nooline;o.$document.on({"click.login":function(n){o.showLoginPanel(n)}},".login-button"),o.$document.on({"click.logout":function(n){o.logout(n)}},".logout-button"),o.$document.on({"click.close-section":function(n){o.closeSection(n)}},".close-section-button"),o.$document.on({"click.go":function(n){o.attemptLogin(n)}},".login-form .go-button"),o.$document.on({"submit.form":function(o){o.preventDefault()}},".form")});