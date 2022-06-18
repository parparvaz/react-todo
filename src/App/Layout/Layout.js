import React from 'react';

const Layout = ({children}) => {
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Layout;
