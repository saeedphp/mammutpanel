import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./components/form/Form";
import Home from "./components/home/Home";
import List from "./components/list/List";
import Sidebar from "./components/sidebar/Sidebar";
import Cookies from 'universal-cookie';
import { useState } from "react";
import logo from './assets/images/logo.webp';

function App() {
    const cookies = new Cookies();
    const token = cookies.get('token');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(username, password)

        await fetch('https://bimeharman.faradns.ir/api/auth/signin?api-version=1.0', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(async response => {
                const data = await response.json();

                // setRecord(data.result);
                // console.log(data);
                cookies.set('token', data.accessToken.token, { path: '/' });
                console.log(cookies.get('token'));
                window.location.reload();
            })
            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });;
    };

    return (
        <div className="App container-fluid">
            {token ? (
                <div className="row flex-nowrap">
                    <Sidebar />

                    <div className="col py-3">
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/list/:model" element={<List />} />
                                <Route path="/form/:model/:id" element={<Form />} />
                                <Route path="/create/:model/" element={<Form />} />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            ) : (
                <div className="login-form w-100 m-auto">
            <span className="logo-wrapper">
                <img src={logo} alt="logo" />
            </span>
                    <form onSubmit={submitHandler}>

                        <div>
                            <label htmlFor="username">
                                نام کاربری
                            </label>
                            <input id="username" name="username" type="text" className="form-control" onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="password">
                                رمز عبور
                            </label>
                            <input id="password" name="password" type='password' className="form-control" onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div>
                            <button className="btn btn-primary mt-3 w-100">
                                ورود
                            </button>
                        </div>

                    </form>
                </div>
            )}
        </div>
    );
}

export default App;
