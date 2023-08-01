const Footer = () => {
  return (
    <section className="footer">

      <div className="flex justify-center items-center">
        <div className="">
          <ul className="list-none flex gap-2 items-center">
            <li className="w-16 h-16 text-center cursor-pointer">
              <a href="https://www.facebook.com/adel.karem.507?mibextid=ZbWKwL" target="_blank">
                <i className="fa fa-facebook fa-2x text-[#3b5998]" aria-hidden="true"></i>
              </a>
            </li>

            <li className="w-16 h-16  text-center cursor-pointer">
              <a href="#"><i className="fa fa-twitter fa-2x text-[#00aced]" aria-hidden="true"></i></a>
            </li>
            <li className="w-16 h-16 text-center cursor-pointer">
              <a href="https://instagram.com/adel_karem7?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><i className="fa fa-instagram fa-2x text-[#bc2a8d]" aria-hidden="true"></i></a>
            </li>
            <li className="w-16 h-16 text-center cursor-pointer">
              <a href="mailto:adelzeden@gmail.com" target="_blank"><i className="fa fa-google fa-2x text-[#dd4b39]" aria-hidden="true"></i></a>
            </li>
            <li className="w-16 h-16 text-center cursor-pointer ">
              <a href="http://wa.me/+201027486827" target="_blank"><i className="fa fa-whatsapp fa-2x text-[#4dc247]" aria-hidden="true"></i></a>
            </li>
          </ul>


        </div>
      </div>
    </section>
  );
}

export default Footer;
