import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';

export const SwitchModeIcon = styled(Fab)`
  position: fixed;
  right: 15px;
  bottom: 15px;
  visibility: hidden;
  transition: transform 0.5s ease-in-out;
  z-index: 99;
  background: ${(props) => (props.theme === 'dark' ? '#2a222a' : '#fef6cd')};
  &:hover {
    background: ${(props) => (props.theme === 'dark' ? '#1c171c' : '#fdf2b4')};
    transition: all 0.3s ease-in-out;
  }
`;

export const Sunny = styled(WbSunnyRoundedIcon)`
  fill: #f9d71c;
`;

export const Moon = styled(NightsStayRoundedIcon)`
  fill: #b9a9ba;
`;
