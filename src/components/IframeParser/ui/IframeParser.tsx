import style from './style.module.scss'

interface IProps {
    iframe: string
    className?: string
}

//уже готовый вставили , он даёт возможность контралировать
// мы берём ссылку от пользователя и начинаем её разбивать на src, height allow в ссылке
//здесь парсим ссылку в компанент

export const IframeParser = ({ iframe }: IProps) => {
    const parseIframe = (iframeStr: string) => {
        const srcMatch = iframeStr.match(/src="([^"]+)"/)
        const heightMatch = iframeStr.match(/height="([^"]+)"/)
        const allowMatch = iframeStr.match(/allow="([^"]+)"/)

        return {
            // в пропсах через className задаём свои стили и типизируем
            allow: allowMatch ? allowMatch[1] : '',// регулярное выражение
            height: heightMatch ? heightMatch[1] : '800',
            src: srcMatch ? srcMatch[1] : '',
            width: '100%', //по задумки такая ширина 
        }
    }
//Iframe разбивается на части сверху и через деструктуризацию передаётся ниже

    const { allow, height, src, width } = parseIframe(iframe)

    return (
        <iframe
            className={style.video}
            src={src}
            width={width}
            height={height}
            allow={allow}
            frameBorder='0'
            allowFullScreen
        />
    )
}
