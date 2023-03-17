import React from 'react'
import './register.css'

const login = () => {
  return (
    <>
    <section>
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Register</h2>
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
                        <p>Already have an account? <a href="loginemp">Login here!</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  )
}

export default login
