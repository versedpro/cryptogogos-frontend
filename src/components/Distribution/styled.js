import styled from 'styled-components'

export const DistributionWrapper = styled.div`
    .first,
    .second,
    .third,
    .fourth,
    .fifth,
    .sixth {
        display: block !important;
    }
    .milestone-end {
        position: absolute;
        top: -81px;
        display: none;
    }
    .milestone-display {
        display: block !important;
    }
    .in-progress .milestone.progressed {
        top: -81px !important;
        display: block !important;
    }
    .in-progress .milestone {
        display: none;
    }
    .in-progress .milestone.first {
        display: block !important;
    }
    .nft-distribute .progressed-bar {
        height: 15px;
        width: calc(100% - 62%);
        display: block;
        background-color: #ecfff4;
        box-shadow: 0px 0px 20px #3cc071;
        position: absolute;
        margin-left: -2px;
    }
    .nft-distribute.in-progress .distribute-bar {
        height: 15px !important;
        width: calc(100% - 33px) !important;
        display: block;
        background-color: #964d85 !important;
    }
    .nft-distribute .progressed-bar {
        display: none !important;
    }
    .nft-distribute.in-progress .progressed-bar {
        display: block !important;
    }
    .nft-distribute .milestone.progressed {
        display: none !important;
    }
    .nft-distribute.in-progress .milestone.progressed {
        display: block !important;
    }
`
