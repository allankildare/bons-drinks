import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: var(--gray);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.42);
  color: #fafafa;
  font-size: 22px;
  padding: 10px 0;
  z-index: 50;

  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: header;
`
export const NavMenu = styled.nav`
  max-width: 1000px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .headerLogo {
    font-family: "Bilbo Swash Caps", cursive;
    font-size: 36px;
    width: 20%;
  }

  .headerLogo a {
    color: #ececec;
    transition: 0.3s ease color;
  }

  .headerLogo a:hover {
    color: var(--light-purple);
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
  }

  li {
    margin-left: 100px;
    text-transform: uppercase;
    font-weight: 300;
  }

  li:last-child {
    background-color: var(--purple);
    font-size: 21px;
    padding: 7px 10px;
    border-radius: 25px;
    font-weight: 500;
    transition: 0.6s ease transform;
  }

  li:last-child:hover {
    transform: scale(0.95);
  }

  li:last-child a:hover {
    color: #ececec;
  }

  li a,
  li a:visited {
    color: #ececec;
    text-decoration: none;
    transition: 0.4s ease color;
  }

  li a:hover {
    color: var(--light-purple);
  }
`
