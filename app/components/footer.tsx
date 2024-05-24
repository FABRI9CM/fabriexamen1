
'use client';

export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-gray-950 to-gray-950 shadow-top shadow-red-500/50 py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-red-500">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Datos de contacto</h3>
            <p>Fabricio Castro Martínez</p>
            <p>Teléfono: 8427-9801</p>
            <p>Email: fcastromar23@gmail.com</p>
          </div>
          <img src="logo2.png" alt="Imagen del footer" className="h-14 mr-3" />
          <div>
            <h3 className="text-lg font-bold mb-2">Redes sociales</h3>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <a href="https://www.facebook.com/share/avyBmXmEw6g1hUyB/?mibextid=LQQJ4d" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <img src="/facebook.png" alt="Facebook" className="h-8 w-8" />
              </a>
              <a href="https://www.instagram.com/cast_fxbr1?igsh=MWN5N3R2NW5weWw3aw%3D%3D&utm_source=qr" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.png" alt="Instagram" className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-red-500">
          <p>&copy; Fabricio Castro Martínez.2024.Universidad de Costa Rica.</p>
        </div>
      </footer>
    );
  }
  