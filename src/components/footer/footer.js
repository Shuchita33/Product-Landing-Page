import '../footer/footer.css';
export const Footer=()=>{
    return(
        <>
            <footer>
                <div class="footer-div">
                    <div class="logo-footer">
                        <img src="https://res.cloudinary.com/shuchita/image/upload/v1717762445/logo_qzvat1.jpg" alt=""/>
                            <p>Specializes in providing high-quality, stylish productsfor your wardrobe</p>
                    </div>
                    <div class="contacts">
                        <div class="companies">
                            <h3>COMPANY</h3>
                            <p>About</p><p>Terms of Use</p><p>Policies</p>
                        </div>
                        <div class="socials">
                            <h3>CONTACTS: </h3>
                            <a href="https://github.com/Shuchita33" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-github fa-lg"></i> 
                                Github
                            </a>
                            
                            <a href="https://www.linkedin.com/in/shuchita-gupta-636021223/" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-linkedin fa-lg"></i> 
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p>Copyright <i class="fa-regular fa-copyright"></i> 2024 Vastra</p>
            </footer>
        </>
    )
}