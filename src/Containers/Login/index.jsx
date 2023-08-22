import React from "react"
import { getCustomStyles } from './style';


function Login()
{
    const customStyles = getCustomStyles();

    return (
        <>
        <style>
            {customStyles}
        </style>

        <div className="d-flex align-items-center py-4 bg-body-tertiary">

            <main className="form-signin w-100 m-auto">
                <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
                </form>
            </main>
        </div>
        </>
    )
}

export default Login;
