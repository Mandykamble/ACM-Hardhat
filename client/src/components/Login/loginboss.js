import React from 'react'
import './loginboss.css'



function login() {
  return (
    <>
     <section2>
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Employer login</h2>
                    <div class="inputbox">
                        <ion-icon name="lock-mail-outline"></ion-icon>
                        <input type="email" required/>
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required/>
                        <label for="">Password</label>
                    </div>
                    
                    <div class="forget">
                        <label for=""><input type="checkbox"/>Keep me logged in</label>
                      
                    </div>
                    <button>Log in</button>
                    <div class="register">
                        <p>Don't have an account? <a href="register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section2>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  );
}

export default login
