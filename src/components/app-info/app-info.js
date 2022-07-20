import './app-info.css';

const AppInfo = ( { increased, employees } ) => {
    return (
        <div className="app-info">
            <h1>Employees in the company</h1>
            <h2>Number of employees: { employees }</h2>
            <h2>The award will go to: { increased }</h2>
        </div>
    )
}

export default AppInfo;