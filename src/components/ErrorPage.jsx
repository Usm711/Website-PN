function ErrorPage() {
    const handleSearch = (e) => {
      e.preventDefault();
      const query = document.getElementById("error-search-input").value;
      if (query.trim() !== "") {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
      }
    };
  
    return (
      <div className="error-container">
        <div className="error-content">
          <div className="error-animation">
            <div className="error-icon">
              <svg viewBox="0 0 100 100" className="error-svg">
                <circle className="circle" cx="50" cy="50" r="45" />
                <line className="line line1" x1="35" y1="35" x2="65" y2="65" />
                <line className="line line2" x1="65" y1="35" x2="35" y2="65" />
              </svg>
            </div>
          </div>
          
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          
          <p className="error-message">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
          
          <div className="error-actions">
            <a href="/" className="home-button">
              <span>Go Home</span>
              <svg className="arrow-icon" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
            
            <button className="back-button" onClick={() => window.history.back()}>
              Go Back
            </button>
          </div>
          
          <div className="error-search">
            <p>Or try searching for what you need:</p>
            <form className="search-box" onSubmit={handleSearch}>
              <input 
                id="error-search-input"
                type="text" 
                placeholder="Search..." 
              />
              <button type="submit" className="search-button">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <style jsx>{`
          .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          .error-content {
            text-align: center;
            max-width: 600px;
            width: 100%;
            padding: 40px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.6s ease-out;
          }
          
          .error-animation {
            margin-bottom: 30px;
          }
          
          .error-icon {
            display: inline-block;
            width: 120px;
            height: 120px;
          }
          
          .error-svg {
            width: 100%;
            height: 100%;
          }
          
          .circle {
            fill: none;
            stroke: #ff6b6b;
            stroke-width: 3;
            stroke-dasharray: 283;
            stroke-dashoffset: 283;
            animation: drawCircle 1.2s ease-in-out forwards;
            opacity: 0.8;
          }
          
          .line {
            stroke: #ff6b6b;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-dasharray: 42;
            stroke-dashoffset: 42;
          }
          
          .line1 {
            animation: drawLine 0.8s ease-in-out 0.8s forwards;
          }
          
          .line2 {
            animation: drawLine 0.8s ease-in-out 1s forwards;
          }
          
          .error-code {
            font-size: 6rem;
            font-weight: 800;
            color: #076E74;
            margin: 0;
            line-height: 1;
            animation: bounce 1s ease;
          }
          
          .error-title {
            font-size: 2rem;
            font-weight: 600;
            color: #343a40;
            margin: 10px 0;
          }
          
          .error-message {
            font-size: 1.1rem;
            color: #6c757d;
            margin: 20px 0 30px;
            line-height: 1.6;
          }
          
          .error-actions {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
          }
          
          .home-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background-color: #076E74;
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(7, 110, 116, 0.2);
          }
          
          .home-button:hover {
            background-color: #055a60;
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(7, 110, 116, 0.3);
          }
          
          .arrow-icon {
            width: 16px;
            height: 16px;
            transition: transform 0.3s ease;
          }
          
          .home-button:hover .arrow-icon {
            transform: translateX(4px);
          }
          
          .back-button {
            padding: 12px 24px;
            background: transparent;
            color: #076E74;
            border: 2px solid #076E74;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .back-button:hover {
            background-color: #076E74;
            color: white;
            transform: translateY(-2px);
          }
          
          .error-search {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
          }
          
          .error-search p {
            margin-bottom: 15px;
            color: #6c757d;
          }
          
          .search-box {
            display: flex;
            max-width: 400px;
            margin: 0 auto;
            border: 1px solid #ced4da;
            border-radius: 50px;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          
          .search-box:focus-within {
            border-color: #076E74;
            box-shadow: 0 0 0 3px rgba(7, 110, 116, 0.1);
          }
          
          .search-box input {
            flex: 1;
            padding: 12px 20px;
            border: none;
            outline: none;
            font-size: 1rem;
          }
          
          .search-button {
            padding: 12px 16px;
            background: #076E74;
            color: white;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
          }
          
          .search-button:hover {
            background: #055a60;
          }
          
          /* Animations */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes drawCircle {
            to { stroke-dashoffset: 0; }
          }
          
          @keyframes drawLine {
            to { stroke-dashoffset: 0; }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-20px); }
            60% { transform: translateY(-10px); }
          }
          
          /* Responsive Design */
          @media (max-width: 768px) {
            .error-content {
              padding: 30px 20px;
            }
            
            .error-code {
              font-size: 4.5rem;
            }
            
            .error-title {
              font-size: 1.75rem;
            }
            
            .error-message {
              font-size: 1rem;
            }
            
            .error-actions {
              flex-direction: column;
              align-items: center;
            }
            
            .home-button, .back-button {
              width: 100%;
              max-width: 250px;
              justify-content: center;
            }
          }
          
          @media (max-width: 480px) {
            .error-code {
              font-size: 3.5rem;
            }
            
            .error-title {
              font-size: 1.5rem;
            }
            
            .error-icon {
              width: 100px;
              height: 100px;
            }
          }
        `}</style>
      </div>
    );
  }
  
  export default ErrorPage;