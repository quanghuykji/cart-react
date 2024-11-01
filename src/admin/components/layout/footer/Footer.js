import './Footer.scss'

function Footer() {
    return ( 
        <div className="container-fluid pt-4 px-4">
                <div className="footer-admin rounded-top p-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center text-sm-start">
                        Copyright © 2023 <a href="https://example.com">VNSIM Company</a>, All Right Reserved. 
                        </div>
                        <div className="col-12 col-sm-6 text-center text-sm-end">
                            Designed By <a href="https://www.facebook.com/profile.php?id=100041650772723">Quang Huy</a>
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default Footer;