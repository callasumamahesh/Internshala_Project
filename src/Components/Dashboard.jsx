import React from 'react'
import { useState } from 'react'
function Dashboard() {
    const [selected, setSelected] = useState(1)
    return (
        <div>
            <header className='header'>
                <p><i className="fa-regular fa-user"></i></p>
                <section className="searchbar">
                    <div className='totalsearchdiv'>
                        <select id="selectfile">
                            <option className="option" name='Patient' value='Patient'>Patient</option>
                            <option className="option" name='Doctor' value="Doctor" >Doctor</option>
                            <option className="option" name="Expert" value="Expert" >Experts</option>
                        </select>
                        <div className="totalSearchbar">
                            <input type="text" placeholder='Search' />
                            <p><i className="fa-solid fa-magnifying-glass"></i></p>
                        </div>
                    </div>
                    <div className='Addnewbtn'>
                        <i className="fa-solid fa-plus"></i>
                        <button className="btn">Add New</button>
                    </div>
                </section>
                <section className="profile">
                    <span><i className="fa-solid fa-bell"></i></span>
                    <span><i className="fa-solid fa-user"></i></span>
                </section>
            </header>
            <section className='allsides'>
                <nav className="navbar">
                    <p>Dashboard</p>
                    <section className="dashboard">
                        <div className={selected === 1 ? 'changebackground' : 'nobackground'} onClick={() => setSelected(1)}>
                            <i className="fa-solid fa-user"></i>
                            <p>Patients</p>
                        </div>
                        <div className={selected === 2 ? 'changebackground' : 'nobackground'} onClick={() => setSelected(2)}>
                            <i className="fa-solid fa-database"></i>
                            <p>HR</p>
                        </div>
                        <div className={selected === 3 ? 'changebackground' : 'nobackground'} onClick={() => setSelected(3)}>
                            <i className="fa-solid fa-flask"></i>
                            <p>Labs</p>
                        </div>
                        <div className={selected === 4 ? 'changebackground' : 'nobackground'} onClick={() => setSelected(4)}>
                            <i className="fa-solid fa-shop"></i>
                            <p>Pharma</p>
                        </div>
                    </section>
                    <p>Process</p>
                    <section className="process">
                        <div className={selected === 5 ? 'changebackground' : 'nobackground'} onClick={() => setSelected(5)}>
                            <i className="fa-solid fa-registered"></i>
                            <p>Registration</p>
                        </div>
                        <div className={selected === 6 ? 'changebackground' : 'nobackground'} onClick={() => setSelected(6)}>
                            <i className="fa-solid fa-file"></i>
                            <p>Consultation</p>
                        </div>
                        <div className={selected === 7 ? 'changebackground' : 'nobackground'} onClick={() => setSelected(7)}>
                            <i className="fa-solid fa-vial"></i>
                            <p>Tests</p>
                        </div>
                        <div className={selected === 8 ? 'changebackground' : 'nobackground'} onClick={() => setSelected(8)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                            <p>Editing</p>
                        </div>
                    </section>
                </nav>
                <section className="rightside">
                    <div className='consultants'>
                        <i className="fa-solid fa-users"></i>
                        <p>Consultants</p>
                    </div>
                    <div className='filters'>
                        <p>Filters</p>
                        <select>
                            <option value="">Select Range</option>
                            <option value="0-25">0-25</option>
                            <option value="25-50">25-50</option>
                            <option value="50-75">50-75</option>
                            <option value="75-100">75-100</option>
                        </select>
                        <div className='radiobuttons'>
                            <div>
                                <input type="radio" id="summary" name="selectone" />
                                <label htmlFor="summary">Summary</label>
                            </div>
                            <div>
                                <input type="radio" id="branch" name="selectone" />
                                <label htmlFor="branch">Branch Wise</label>
                            </div>
                        </div>
                    </div>
                    <section className="alldives">
                        <div className='firstdiv'>
                            <div className='divindives'>
                                <p className='color'>Consultant Count</p>
                                <p>90/900</p>
                                <p>Today/Period</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-users"></i>
                            </div>
                        </div>
                        <div className='firstdiv'>
                            <div className='divindives'>
                                <p className='color'>Consultations</p>
                                <p>11/25</p>
                                <p>Today/Period</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-building"></i>
                            </div>
                        </div>
                        <div className='firstdiv'>
                            <div className='divindives'>
                                <p className='color'>Labs</p>
                                <p>25/560</p>
                                <p>Today/Period</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-flask"></i>
                            </div>
                        </div>
                        <div className='firstdiv'>
                            <div className='divindives'>
                                <p className='color'>Diet Plans</p>
                                <p>25/250</p>
                                <p>Today/Period</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-bowl-food"></i>
                            </div>
                        </div>
                    </section>
                    <section className="table">
                        <div className='tablehead'>
                            <h4>Consultant</h4>
                            <div className='arrows'>
                            <i className="fa-solid fa-angle-up"></i>
                            <i className="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <table className='tbody'>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>PATIENT COUNT</th>
                                    <th>LABS</th>
                                    <th>DIET PLANS</th>
                                </tr>
                            </thead>
                            <tbody className='row'>
                                <tr>
                                    <td>John Smith</td>
                                    <td>12</td>
                                    <td>3</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Jane Doe</td>
                                    <td>8</td>
                                    <td>2</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Mark Johnson</td>
                                    <td>6</td>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Mark Johnson</td>
                                    <td>10</td>
                                    <td>4</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>David Chen</td>
                                    <td>14</td>
                                    <td>6</td>
                                    <td>9</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Dashboard