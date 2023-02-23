import styles from  "~/styles/leftBar.css"
//import star from "~/assets/star.svg";


export function links() {
    return [{ rel: "stylesheet", href: styles }];
  }

export default function leftBar({fn, fn2}) {
  
    return (
        <div className="leftBar__wrapper">
            <h3 className="leftBar__section">NOTA:</h3>
            <label className="leftBar__label">
            <input type="checkbox"  className="leftBar__input" name="stars" onClick={() => fn("1")}/>    
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            </label>

            <label className="leftBar__label">
            <input type="checkbox" className="leftBar__input" name="stars" onClick={() => fn("2")} />    
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>

            </label>

            <label className="leftBar__label">
            <input type="checkbox" className="leftBar__input" name="stars" onClick={() => fn("3")} />    
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>

            </label>

            <label className="leftBar__label">
            <input type="checkbox" className="leftBar__input" name="stars" onClick={() => fn("4")} />    
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>

            </label>

            <label className="leftBar__label">
            <input type="checkbox" className="leftBar__input" name="stars" onClick={() => fn("5")} />    
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
            </label>

            <h3 className="leftBar__section" style={{marginTop: "15px"}}>CUSTO PARA 2 PESSOAS</h3>
            <label className="leftBar__label">
            <input type="checkbox"  className="leftBar__input" name="price" onClick={() => fn2("50")}/>
            <span className="leftBar__price">ate R$50</span>  
            </label>

            <label className="leftBar__label">
            <input type="checkbox"  className="leftBar__input" name="price" onClick={() => fn2("50_80")} />
            <span className="leftBar__price">De R$50 a R$80</span>  
            </label>

            <label className="leftBar__label">
            <input type="checkbox"  className="leftBar__input" name="price" onClick={() => fn2("80_110")} />
            <span className="leftBar__price">De R$80 a R$110</span>  
            </label>

            <label className="leftBar__label">
            <input type="checkbox" className="leftBar__input" name="price" onClick={() => fn2("110")} />
            <span className="leftBar__price">Acima de R$110</span>  
            </label>
        </div>
                
    )

}