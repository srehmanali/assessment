import './Lister.css'


function ListerComponent() {
    return (
        <div className="lister_wrapper">
            <div className="list_wrap">
                <ul>
                    <li className="main_li">
                        <div className="list">
                            <div className="grid_wrapper">
                                <div className="box a">A</div>
                                <div className="box b">B</div>
                                <div className="box c grid_wrapper_fork">
                                    fork by:
                                    <div className="fork_box ">1</div>
                                    <div className="fork_box ">2</div>
                                    <div className="fork_box ">3</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="main_li">
                        <div className="list">
                            <div className="grid_wrapper">
                                <div className="box a">A</div>
                                <div className="box b">B</div>
                                <div className="box c grid_wrapper_fork">
                                    <div className="fork_box ">1</div>
                                    <div className="fork_box ">2</div>
                                    <div className="fork_box ">3</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="main_li">
                        <div className="list">
                            <div className="grid_wrapper">
                                <div className="box a">A</div>
                                <div className="box b">B</div>
                                <div className="box c grid_wrapper_fork">
                                    <div className="fork_box ">1</div>
                                    <div className="fork_box ">2</div>
                                    <div className="fork_box ">3</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ListerComponent