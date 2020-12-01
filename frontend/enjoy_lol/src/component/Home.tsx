import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InputAdornment,
         Input,
         IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useHistory } from 'react-router'


import { RootState } from '../redux/rootRedux';
import {changeName} from '../redux/HomeRedux';

interface HomeProps {
  name: string
  changeName: (name: string) => void
}

function Home (props: HomeProps) {
  const { name, changeName } = props;
  const { push } = useHistory();
  return (
    <div>
      <Input
        id="nickName"
        placeholder='닉네임을 입력하세요'
        value={name} 
        onChange={(event: any) => changeName(event.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label='SearchIcon'>
              <SearchIcon onClick={() => push(`/${props.name}`)}/>
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
}



export default connect(
  (state: RootState) => ({ name: state.Home.name }),
  (dispatch : Dispatch)  => ({ changeName: (name:string) => dispatch(changeName(name)) })
)(Home)