import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"

const CardFb=(props)=>{
    const image=props.image,cardHeight=props.cardHeight,logo=props.logo,name=props.name;
    console.log(props.image);
    console.log(cardHeight);
    console.log(image);


    const pdfRef=useRef();
    const downloadPDF=()=>{
      toast.success("Please Wait Card is Downlaoding !!");
        const input=pdfRef.current;
        html2canvas(input).then((canvas)=>{
            const imgData=canvas.toDataURL('image/png');
            const pdf=new jsPDF('p','mm','a4',true);
            const pdfWidth=pdf.internal.pageSize.getWidth();
            const pdfHeight=pdf.internal.pageSize.getHeight();
            const imgWidth=canvas.width;
            const imgHeight=canvas.height;
            const ratio=Math.min(pdfWidth / imgWidth,pdfHeight / imgHeight);
            const imgX=(pdfWidth-imgWidth*ratio);
            const imgY=30;
            pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
            pdf.save('card.pdf');

        });
    }
    return(
        <div className=" flex h-screen w-full  align-middle bg-[#fecaca]
        " >
          <div className=" absolute ml-[53rem] mt-[207px] h-[60px] w-[25px] bg-black -rotate-3
       " ></div>
          <div ref={pdfRef} className="bg-[url(./images/Ut.jpeg)] bg-no-repeat bg-cover 
             md:h-[400px]
             md:w-[400px]
             shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
             mt-[10rem]
             rounded-lg mx-auto" >
               <div className="flex block " >
                 {/* left */}
                  <div className=" flex flex-col mt-[147px] gap-2 w-11/12 absolute
                   ">
                    <div>
                     {
                         image?<img src={URL.createObjectURL(image)} alt="" className="
                          block w-[140px] h-[140px] ml-[44px] rounded-full mt-[4.5px]">
                          </img>:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMefcvqewnzqNjJEASFqDN6cELpoXF18JYoIjYC9SqCgkyPJUXiYrBt_arqQ1P0KOR6w&usqp=CAU" 
                         className="   block w-[140px] h-[140px] ml-[44px] rounded-full mt-[4.5px]" alt=''></img>
                       }
                    </div>
                    <div className=" absolute w-5/12 mt-[16px]">
                     <p className="
    
                       text-[1rem]  font-bold
                        max-w-[220px]
                        font-bold
                        mt-[140px]
                         -rotate-3">{props.name}</p>
                     <p className="
                         text-[1rem]  font-bold
                         max-w-[220px]
                         font-bold
                          -rotate-3">{props.designation}</p>
                    </div>
                  </div>
                  {/* right */}
                  <div className="flex">
                     <div className=" absolute ">
                       {
                         logo? <img src={URL.createObjectURL(logo)} alt=''
                         className="
                         mx-w-[140px] max-h-[30px] ml-[270px] mt-[40px] "></img> :
                         <img  alt=''
                         src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhIREhIVFhUXFxUXFRYRFxUXEhUXFxUWFhcYFxcYHSggGBolGxUVITEiJSkrLi4uFx8zODMsNygtLysBCgoKDg0OGxAQGy0lICY1LS0tLzAtLS0vLy0tKy0vLy8vLS0tLS8tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS01Lf/AABEIAIkBcAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xABHEAABAwEEBwUCDAMHBAMAAAABAAIDBAUGESEHEjFBUWFxEyKBkaEysRQjNEJSYnKCkrLB0UNT4RckM7PC0vBjk6LiFnOD/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAgMGAQf/xAA4EQABAwIBCgUCBQQDAQAAAAABAAIDBBEhBRIxQVFhcYGRsROhwdHwMjMUIlJy4SM0QmKCsvEV/9oADAMBAAIRAxEAPwC8URERERYNqWnDSs7SaRrG7sdpPBrRm48gvQC42AuUJtiVnIq4tXSZhiKaHW+vKf8AQ39wtObyWrUZxl4HCKNrW+BcMfVWTckz5udIWsH+xt85qOall7NueCt9FTrmWyc9ao8JSPQFeL7XtWD25J283jXHmQQsxktrsGTMJ2XHpdefibaWHoroRVBRaQK1uGs6OT7bAD5s1VJLO0jROwE8TmfWjOu3xGRHhitcuSamPUDwPobFetqY3blO0WFZ9ow1DdeGRr2/VOY5EbQeRWaq4gg2KkXuiIi8RERERERERERERERERERERERERERERERERERERERERERYdoQyPYWxv1HH5wAJHTEEIUOhc1ldFFh2kjWY7NZwGPTFYz7eph/Hj/EFXN87qywxuqXzF7sWgk445nV2+KhcriAoEtU+N1i0dVU1OUJYX5pYOurkr4prdgkcGMlY5x2BpBPkCtqCq30Z2a3sxNhi5xOfIOVkAKZGS5oLtasoXOcwOdYXxwXKIizWxERERERERERR+91vCjhxbgZX4iMHjvceQ9+A3rOON0jwxoxK8c4NFysW917WUY7OPB85Hsn2WA7C/D0bv5KsmMqbRn2ukkO1zvZaPDJo5BYr+0nkAxLpJHbTmS4nMlXJdWwWUcLWgYvObnbyd6v5HR5NiAZjI7X68Ng169BUFodUOx+kfOq1l3rjQQAOlHaP4u2DoNylccLW5NaB0C9UVBJI+V2c83O9TmtDRYBF5via7IgHqF6IsF6onblx6aoxcwdk/izYeo2FVjb9kzUT9SVuR9l49l3TgeSvpQvSDZVTWNhgha3s9bWkc4547AAMNgxJ55K2ybXvjkDJHfk131cNPTXsviotRAC0lox3a/m1Vld4VL52/BHObJ9JuwD624jkdqvqkD9RuuQX4DWIGAJwzOG5ae6124qGMNaMXn2nHaSt+tOUa78VIM0WA0bTx9Bq4krOnh8MY6SiIir1vREREREREREREREREREREREREREREREREREREREREREREUY0hj+4y9Y/zhUxWq6NIfyGXqz84VL1qqK3744DuVzmVf7pv7R3crW0a/Jo/vfmKnCg+jX5NH978xU4VpH9A4Dsr+H7beA7IiIs1sRERERERERUre21TU1MkmOLGnUj4arcsfE4nxVq3nqjDSzyA4EMIaeBd3R6kKjpzgFfZFhBzpDwHqoVW/Q3mpXoxs/tah8rhlGMvtO/oPVW2oJolhAppH73POPgAP0U7UDKcmfVP3YdP5uea307bRjr1RERQFuREREREREREREREUOvVevsdaGEjXzDnHMMPADe70HPdi5waLlbqenknfmRjH588lI6+0oqcYyyNYN2J7x6NGZ8Ao9U3+p25MZI/n3Wj1OPotTYF2XVXx9S5xDswCTrHqTn4KWwXapWjAQt8QsP6jsdHdTCKKB2a68h12Ia3lpJ4rTQX+hd7UUg6Fh/ULb2feSmnIDZNVx+bJ3T0GORPQrDtG5tPKDqN7N24swHmN6r21aKSjl7KUY72u+aRxH7LW58keJxCl09NRVl2x5zHbL9tvDA8ldCKuLuXmfBg2Ql8XPN0fMHaRy8udhxShwDmkEEAgjYQdhC3MeHjBVlXSPpnWdoOg7V6IiwbRr2wtxOZOwcUe9rGlzjYBRmtLjYLKe8NGJIA4nILXVFtxN2Yu6ZDzK0gfLVyauPM/RaOi3lNY0TBmNY8XfsoDJ6ipGdEA1uouFyeDQbAcTyKkujjiwfcnYMB1WKLxt/lnz/AKLJhtuN206vXMei95LMhcMCweGS0dq2SYu+wks38W/uFoqH5QpmmTOa8DT+WxHIHrie62RinlObYtPFSaKVrhi0gjkvRQujq3MOIOB/5tUns+uEo+sNo/VSKHKMdSLaHbPb5vxC1T0zot4WaiLV29bMVHEZZTya0e093AfvuVm1rnuDWi5OhRSQBcraLTV96KODESVMYI2taddw6tZiVXElqVtrzdi12ozaWMxEYb9be89cuQUmpNG1MGjtC5zt5xI9GkKxfSQU5tUvOd+loBtzJA+bCFpEr34sGG0+y2Yv5Z52Tk//AJTfqxdnX5oR/GP/AG5f9qiN47gugaZaZxe1ubozm7D6p39FCJazEKdT5No6hudE51teIuOP5VpfPIw2cB5+6t92kOzRtqD/ANqb/YtjYt5aasJFO9z8Np7OVrRy1ntAx5KBXOu3Z9oR6+DxIwjtYy45cCOLTh6EKy7Ps+KBoZEwNA4BV1bHSxExsa/OGnOLbDoDfqOK3ROkdiSLbr+q02kP5DL1Z+cKlK5XXpC+Qy9WfnCpSuXM1n3xwHcqjyr/AHQ/aO7lbGjT5NH978xU4UH0afJo/vfmKnCs4/oHAdlfw/bbwHZFhWhaUMDdaWRrBu1jmeg2nwWqvReEUrdVmBlIxAOxo+k79AohYdhyWhIZqh7i3HaTmeQ4DkF46THNbpVlDRjw/GmOa3VtPD3PHQt9VaRaZuTGSv5gBrfMnH0XhTaSISe9DIByLXHyOCkNNdulY3VETPJaW8VyIpWl8IDHjMAZNPI/usXNltcHlZboZcnl2a+MgfqLr9QLc7XW8sm36eqGEUne3sd3XjwO3qMQtuvn6WZ8D9pY9jjsODg4Ow2jYcVaFyL1CrjLJCO1Zhidmu3c7DjuP9V5FPn4HStuUskinb4sRu3XtHuN/pisnSM/CheOL4wfxg/oqgqtit/SPGTQSkfNMbvAPbj6EqmJZsQuvyILwG36j2auUq/r5e6tfRKf7m7lK79FOFWuh6sBZUQ7w5sg6OGqfy+qspUmUmltXIDtv1x7FTKc3iaiIihLciIiIiIiIiIuCiLS3ptT4PCS04PedRnIkY63gMfHBVZSM7aojj3OeMefHHyUh0o2gRNCwHIRl3i5zh/oCjF0arGthJ4n3KI9wdJbgF0lHAYqIyN0kOd0Bt78SrvgjDWho2AYL1XVhyXZS1zaKOX2skVNM84d+MF7OOQzb4jEKRrgjFeOAcLFbIpXRPbI3SDcKiYKoauqp5o3trtGPpnHNneZj9AnMeB/Mq7tyn7Gomi+jI8DoHHD0wWdcesMdZF9bunof+BQInEPHRdllGFk1K8jZnDkL9rhXa94AJOwDE9AoPataXuLjv2DgOClFtS6sDzxwHqAfTFQeo2qsy3VFrmxDZnc7kDseq5yhiBBfvspfdSDCIv3uJ8hkFvVqbtn4hnj7ytsugjaGsAboAAHIKucSXElF0e0EEHMHIruizWKg1fT9lI5nA5dDmlHWGN7XA7NvMb1sL2swdG7iCPwn/2UaM2a4WoaaOrd4f8AibjhYG3CxtwV/GRNCM7WMfnmrLjcHAEbDmqevxaZqaqTPuRExsG7unBx6lwPgBwVm3fnLoGneMR5KixUk6xO0kk9Sc19VyHGHufINVrf8r+3QlctWEtAb8wVk6JKcdnPJvL9XwDR+5VhKutD9QDFUR7w8O8HNA97SrFULKQIq5AdvoLeVltg+2EVJaQLFFLVv1RgyUdo0bgSe+B45/eV2qvtL9OOxgl3iQs8HMJ97At2SJSypDRodcHuPMBYVLQYydigVy7UNJWxOB7rnBjxuLXkDPocD4K/l82UjS6aMDaXtA/EF9IR7B0Cl5fYBIx2sjHkcO610Z/KRvUd0hfIJurPztVJ1yuzSF8gm+5/mNVJ1y4qs++OA7lVGVf7pv7R3crZ0Z/Jo/vfmKmNVOI2Pkdsa0uPQDEqHaM/k0f3vzFbq+c2rRzEbw1v4ntB9CVZNNowdw7Lo6OPxfDZtzR1sFW9qVzpXukf7TnEnlwA5AYDwVp2BTCKniaPojHrgqVmmx8wrTnvSyKNoZDLI7VHssLWA4b3OHuBWiB4BJK6bLFM9wiZGP1cBbNticBpOlSkrQ27eempQRJINf6DO9J5bvHBRSartSvOq0GBnBmszLm72j6BZlmaPWN70ztc7xuW7Pc76RzPsqr8LTw/fkuf0sx6u+keZVd2oZK6ollijd33YgDPDEgZ7scsfFTC5F06iCVszzq7QQN4PH0VgUNjxRABjAOgWe1gC8bCAbnErKoynJIzw2ANba1tJtsufQA71hWxRieCaE/PY5vmMj5r53la5pLXDBzSWuHAg4EeYX0m5U9pRsIwzfCmDuSnv4fNkw2/eA8weK6LIlSGSGJ3+WjiPcKgrI7tDhq7fO61Fx7a+B1ccjjgx3ck4BrsM/AgHpir8BxXzBirf0Z3qE8YpZT8awfFkn/EYN32mjzGfFSMtUheBO0aMDw1Hlr3bgtdHJY5h5KwUXAK5XNqwRam2raipGazw9x+ayNjnvd5ZAcyQFtl5vjDtoB6rJpAILhccbLw3tgqvqr82jI8mGnLGbmmNz3dXOIGfQLl18rRYAZGtaDkNaMjE+JVniFv0R5BQHS67Ugp8Bh8Ydn2CrelninlbF4LQDzPn6qNIxzGl2cVrf8A59Wf9L8B/wByllz7Tq6lplnEYjI7mo0gnmSXHyVKGsKvS5GdDTHixp9FtyrAyGIZrQLm17Y8lhTPc9xuTgq/0rtIqmO3GJgHg+TH3hRGx6nspopPovaT01v2xVkaV7MLmRzgewS09DmD5gjxVYALkpbh5XfZNLZaNgOjFp+cPIr6Mo34tB4hZCi1wrU+EUrAT348GP45DI+IwKlAU4G4uuRkidE8xu0g26LlEXBK9WCpG/ceFbUcy0+bQVh3ViJq4cPpA/8Alis2+0mtW1Dt2tqj7uDfeCtpo6swvmEpGTdnp/zxKgNGdLht9V2s0ghycC79AHMtt5aeAVg3iH93d1b7woVI5WHaEHaRvZxBw67vXBV1O0gnFUmXYz47X6iLdCfcKgye7+mW7D6fwpfdKfGNzeB96kKgd3K7s5QDsdkeu5Tlj8VeZOn8WnadYFjxHy/RQKlmZKRz6ruiIpy0KOXwHcYfrH1H9FDcM1ML3nusHU/p+qixbhs2nIdSuQyo0yVpYzSc0cyFc0hzYATv6XUwumPivF3vVNX0sx1HVzMI7rnF8Z3FriTl0JI8FetjUvZQsZwGfVay9d2oq+PUkGDhmx49pp5cuS73JdWKN9ji0ix9Dy2bCdaoamPxRfXpVTaO7wto6odocIpBqPJ2Nzxa48gcR0ceCvhrgRiFQNs3ErKZxwZ2rdzo9vi3d6rY3cvFaVE3U1HOib8ydji1gH0XDAtHjgOCtq6lirLTQPbe1iL6dnA6sdItsxjQyOj/ACuaVd6rHTHabcIKYHF2JkeBuGBa3Hri7yXnU6R53MOpFGx30sXOw6Nyz64rVXPu++0qh9RUEuYHYuLtr3cDyGWXhsC0UlGaR34mowDdAGJJ0Ddwx8gVlJL4gzGa+y7aNLsvmmbVSNIjZmzH5zuI5BXKvKngbG0NaAANgC9VWVlW+ql8R2GoDYNikRRiNtgo3pB+QTfc/wAxqpKuV26QfkE33P8AMaqTrlz9Z98cB3KoMq/3Tf2ju5Wvoy+TR/e/MVub9Ra9DPhuaHeTmk+mK0mjD5Mz73vKmFo0wlilj+mxzfxAhWTReMDd6LpKKTw/Ck2Zp6WKoTWwVyXMq2z0kTsAS0ajshjrNyz6jA+KpqoaWPcx2RDnAjmDgVKbhXhFLL2chwjfgCdzHbndNx/oocEma7HWu1yxSfiae7MS3EbxbG3EWI4K3A0DYF2XAOK5VguJREREXRwWptuzWVMT4ZBi1wwPLgRzBW4IXm9i9BINwi+dbfsWWilMcgy+Y7c8cevELEo5ixzXNJa5pBa5pwII2EFX9bNixVTDHKwOB8xzB3FVfeDR7PAS6D4xnD54/QrpqPK0cgDZjZ23Ufa+sHDZbQq6WlLTdmI8/wCVMLo37ZMGxVJDJcgHnKOTr9F3LYd3BTsL5qeHxnVe0tPBwIPqt/Yl8KqlAbHJrMH8OXvsHTe3wICwqsih/wCeAgX1auRxtw0cF7HWWwer3RVvR6U24fG05x4xPB9HAe9Z/wDahRYexP8Ahj/3qqOS6sG2YeoPqpQqYv1KcqvNMf8AgQf/AGn8jl51eleIf4VNI4/9QtaP/HWUTvDb9Zamo0wYMadZrY2u2kYZuO30U2hyfUQTtllGa0bSNnzTZaZp2PYWsNzuuohIV9BXFP8Acaf7DfcFUlDcOtmwPZhg+uc/T91cl2LOdTU0MLziWNDSRyXuWamKVrQxwJB1Y6tq8pGOaTcLMtGibPG+J4xa4EHxVK3ksCSkkIIJbjkd2HPmr1WFaFnRztLJGhwPFc9JGHjerygr30jyQLtOkeo2EeYw4U1dS3XUUoccSx2TwN43EfWH7q47OtCOdgkieHNO8e4jceSg1saOySXQvy4OWiZYdo0ji6LXaeMbjgeu4+K0s8SPAi4VpVCir7SMkDH/AO2F+Oq+8E+1wdotNeO3WUkZJILyO43fj9IjcB6qBxWjbDu6XPA5NY0/ia0HyWXQXMqJ3a87sMcziSSeu8rYZHOwa088FBFFTwuzp5WuA1MOcTu1W8uKjFJRyVUuOBOJ8fHmrdu3ZApYg3DvHb+y72NYkVM0BjRjx/ZbZexxhg3rTX5QfVuGFmjQPU7+wwRRW8lknEysG32gPepUuCMVhU0zKiMxv/8ADtHzccFEildE7OaquLSCpfYVrh4DHHBw4717WlYDJMS3unls8lo5rBmYcm482lUcNNWULyWNz2nTbDy0g8LjbunvlgqG2JzT816PMKaNkXEszWjFxwHNRCJ9WzIa/lj716/A6qY5g9XnJWAr5Xi0cD7/AOwzR1J8sFH/AA7G4ukbbdiV421XCRxO4ZDosi71kF7hNIMAPYafeVsaC7zGEOkOu7d9EeC3gGC9o6AxvM8pznnoL7O1+QsL38mqM5ojYLNHmuVwQuV41FQyNpfI5rGja55DWjqTkFZqKu5YFqry0+NJVNa0axglDcBmTqOyC09paRaGHENc+Uj+U3u/ifgD4YrQ1GlgHER0bnfakw9AwqxhybWEh7Yzhjjho42Wl08YwLlWzakkYKzdF14IWxfBHnUfrEsJ9l+sccMdzs9m/cqstCcukfI2F0bCS4M7xazHdrEDJZtDMCF09XDHVRFhuNfA23Gx0+21V8bzG64X0gire519sC2nqnYtOAZK7aODXnePrefFWQuPqaaSnfmv5HUeCs45A8XCjGkR4FBNidpYB+MH9CqVqXhyua+F25K7VAlDWNz1NXLW4niVEv7LH/zG/hVPUQPkkzgNQGkb/dVVbRyzTZ7RgABpG8+q32jSWP4M0a7dYF2IxGIz4KcbVVzdGcg/ijyP7qY3Uu6KJpxeXOO0k+7gpEJlFmubgNd/T+VNpjMAGPYAAAL519G63qodpHuu7WNVC3HH/EaNv2h+qr+KfDavo+WIOGBCgt4tH0UxMkJ1Hnbh7JPMLyWDOxaunyflYwgRy6BoOzcdu7XxWjunfh1OBFNjJGMg4e2wcBjtby2jdwVj0Ft084ximY7ljg8dWnP0VQ1Vx6yM5M1hxacfRecV1Kw5CIjyWLDKzC11JqYcnVJMgkDCdNiP+ptjzHNXRUWlDEMXysaPrPaPeVrKe8kU0gjgDpOLwCI2j7R2ngAPEKEWRo8mcQZnao3hpxKsSxrJipWBkbQPeVvaXnSLd1TzspYhaNxedts1o9TyIG8jBbNcELlFsUJdHNXQxr2REWurLIhmykja7qAtRLcWhdn2IH2cvcpPguVmyR7PocRwJHZeEA6Qol/Z7Q/yz5n917xXHoW/wQeufvUmRZmpmdgXu6n3XgY0ah0C1MN3aVnswsHgFnRUcbfZY0dAshFp04lZIiIiIiIiLjBcFq7IiLz7ILsGrsiIiIiIiIiIi4wXKIi66q5AXKIiIiIi1N4bZZRwmV+Z2MaNr3bhyG8ncFTtt2pUV0rddxe5xwZG3JjcdzW7upz4lbvSTahfWGLHuwta0DdrPaHuPk5g8F56Momy1xLsyyMlvXEDH/nFdLRwikpjUEXda/XQOxOtQZXmWTMvhdb27WjqNoElT33HPU+YPDf4qaQWRAwYNiaB0C2CLn555J3Z0rr9uQ0D5rUxjGswaFrprHhcCDG3PkFXN7dHhi1p6MZDN0Q97P2VrrgrKmqZKd+fGeI1HcV49geLFfMr6jLAq5tGVumppA15xfEezJO0tABaT4EDwVcaVaBsFa4sGDZGNkwGzWJc135QfFb3QwThOdxc3zA/qF0GU5WT0QkA2Ec8CO45KHTtLJS3iFbwXK6t2LsuYU9ERERERERcEBcao4LsiIuAFyiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIipXStQuhrTNh3ZmtIO7WY0McPJrT4rRXStl1JVRzAYgd14G0sd7WHMZHwV3XlsSKthMUoy2tI9prtxB4qlbdujVUTiQ0yM3PYMThzbt8l1FBlCGWn8CXA2zccARx0XAw6EKvmhc1+e3jwV90tSyVjZGODmuGII2ELIXzvY96p6Y/FyOYd4+aerTl6KXUmlSUDvxRv5tLmH/Uq2XI07T+TEdD7ea3tqmHSrZJXnLKACScANpOwKrZtKzjk2mGPOQn0DAtZV1lqWv8Xq9nEdoaCxhH1sTrP9y1f/MlbjMQwbSR5AHE7ll+IafpuStTf60RaNdhT99rQImkfPIJLnDlidvBuKtC4d3vgcDWH2jm48yvG6FyYqMa7u/Idrju5DgFM2MwXlZVMe1sMX0N26Sdp7jfjhoHsUZBLnaSuwXKIq9bkRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERFwQsWelDtyy0RFG6y7UEvtxMPUBYYuRR/wAhnkFLnLhZNe5os0kLwgHStBS3Ypo/YhYOgC28FIG7AB0WSF2WOk3K9XVrcF2RERERERERERERERERERERERf/2Q=="
 
                         className=" mx-w-[140px] max-h-[30px] ml-[270px] mt-[40px] "
                         ></img>
                       }
                     </div>
                     <div className=" absolute flex flex-col
                          w-11/12 mx-auto ml-[7rem] gap-3
                           w-11/12 mx-auto 
                           ">
                             <p className=" 
                                 absolute  
                                   mx-auto text-[1.8rem] leading-[2rem] font-extrabold max-w-[100px] ml-[8rem] mt-[7rem]
                                   ">
                                       WELCOME ABROAD!
                             </p>
                             <h1 className=" 
                                 absolute mx-auto text-[1.3rem] leading-[2rem] font-extrabold  ml-[6.8rem] mt-[12rem] text-green-600"><p>Get To Know Him!</p></h1>
                                 <p className="
                                     absolute 
                                     text-[12px] font-bold ml-[9rem] mt-[14rem]
                                     ">
                                     <span>"</span>I am that one friend <br/> who likes to learn <br/>and adopt quickely. <span>"</span>
                                 </p>
                     </div>
                   
                  </div>
         
               </div>
               <div className="flex  gap-6 justify-center">
                 <button className=" bg-red-500 hover:bg-green-400 
                    w-[100px] h-[35px] mt-[26rem]" onClick={downloadPDF}>
                   Downlaod
                 </button>
                 
               </div>
              
           </div>
     </div>
    );
};
export default CardFb;