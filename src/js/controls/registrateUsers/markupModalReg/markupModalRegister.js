export function renderModalAuthUsers() {
  return `
  
  <div class="form-auth">
      <button type="button" class="form-auth__button-close">
      </button>
      <h2 class="form-auth__title">Login</h2>

      <form class="form-auth__form-login">
        <div class="form-auth__user-box">
          <input type="text" name="email" class="form-auth__input" />
          <lable class="form-auth__lable">Email</lable>
        </div>

        <div class="form-auth__user-box">
          <input type="password" name="pass" class="form-auth__input" />
          <lable class="form-auth__lable">Password</lable>
        </div>

        <div class="form-auth__box-button-form">
          <button type="submit" class="form-auth__btn-submit">LogIn</button>
          <div class="form-auth__registrate">
            Don't have an account?
            <button class="form-auth__button-reg">Register</button>
          </div>
        </div>
      </form>
      </div>
      `;
}

export function renderModalRegUsers() {
  return `
  <div class="backdrop-modal">
  <div class="form-auth">
      <button modal-close type="button" class="form-auth__button-close"></button>
      <h2 class="form-auth__title">Registration</h2>
        
        <form class="form-auth__form-login is-hidden">
        <div class="form-auth__user-box">
          <input type="text" name="email" class="form-auth__input" />
          <lable class="form-auth__lable">Email</lable>
        </div>

        <div class="form-auth__user-box">
          <input type="password" name="pass" class="form-auth__input" />
          <lable class="form-auth__lable">Password</lable>
        </div>

        <div class="form-auth__box-button-form">
          <button type="submit" class="form-auth__btn-submit">Register</button>
          <div class="form-auth__registrate">
            Do have an account?
            <button class="form-auth__button-reg">Auth</button>
          </div>
        </div>
      </form> 
    </div>
    </div>`;
}
