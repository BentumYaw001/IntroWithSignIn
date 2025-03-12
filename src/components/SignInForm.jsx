import { SignInData } from "./Data";

function SignInForm() {
  return (
    <>
      <div className="SignInDesktop">
        <div className="Discount">
          <p>
            <strong>Try it free 7 days </strong> then $20/mo. thereafter
          </p>
        </div>
        <form action="submit">
          {SignInData.map((item) => {
            return (
              <input
                type={item.type}
                name=""
                id=""
                placeholder={item.placeholder}
                required
              />
            );
          })}
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button, you are agreeing to our{" "}
            <span>Terms of Service</span>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignInForm;
