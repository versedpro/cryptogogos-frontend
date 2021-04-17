import { useEffect, useState, createRef } from 'react'
import styled from 'styled-components'

const DrawAnimation = () => {
    const [isOpening, setIsOpening] = useState(true)
    const wrapRef = createRef()
    const cardRef = createRef()

    useEffect(() => {
        setTimeout(() => {
            setIsOpening(false)
        }, 2000)
    }, [])

    return (
        <Wrapper>
            <Vid
                ref={wrapRef}
                autoPlay={true}
                loop
                muted={true}
                isOpening={isOpening}
                src="https://r2---sn-hgn7yn7s.c.drive.google.com/videoplayback?expire=1617686685&ei=XbhrYO-vIJHXhwaA9rxw&ip=197.60.211.253&cp=QVRGWUdfVVZWRlhPOlk3dTV6M0hubm9DQi1uaXNBaEJXR2JKU0F3dUVRM05vUFByZDZlRm1mN28&id=0008350ba98bc08d&itag=37&source=webdrive&requiressl=yes&mh=ep&mm=32&mn=sn-hgn7yn7s&ms=su&mv=m&mvi=2&pl=20&ttl=transient&susc=dr&driveid=1bMGRLyr8Wpnyq67eSXdNu_4nSM5412PP&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=16.091&lmt=1617672186818432&mt=1617672019&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAMvjItyoxd1jRsQXhT0NhsQmCkEGMubMT_LHrtF6FUCwAiAmaCWOH16xLASFpcZLqtmYK4bMpPYtOXGXg68wUeeX4g==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgLREg1lRtvIJSQp4Vxl7c1e3bjjcg42MgJsPQif6hELACIGhq6RAu_VCYsz-thOkerElJUpMB9HHjbGCllw-a6lVP&cpn=J_5Pmy7n0jv5LnuU&c=WEB_EMBEDDED_PLAYER&cver=1.20210404.0.0"
            />
            <Vid
                ref={cardRef}
                muted={true}
                autoPlay={true}
                isOpening={!isOpening}
                loop
                src="https://gateway.pinata.cloud/ipfs/QmbWxnd94YHmYowVjx6WsURjL2w4xzLsd5cexG6JpWqpEt"
            />
        </Wrapper>
    )
}

export default DrawAnimation

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50000;

    video {
        max-height: 70vh;
    }
`

const Vid = styled.video`
    transform: scale(${props => (props.isOpening ? 1 : 0)});
`
