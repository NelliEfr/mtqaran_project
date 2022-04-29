import s from "./index.module.css";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import { courseSortingData } from "../../courseSortingData";
import { amber } from '@mui/material/colors';

const CourseSorting = () => {
	return (
    <div>
      <FormControl className={s.sortingBlock}>
        <FormLabel className={s.chooseText} id="demo-radio-buttons-group-label">Выберете раздел</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >

            {courseSortingData.map((item) => (
            <FormControlLabel 
              key={item.id} 
              value={item.value}
              label={item.label}
              // sx={{
              //   fontFamily: "Arial",
              //   size: '30px',
              // }}  
              control={
                <Radio 
                  size='small' 
                  sx={{
                    '&.Mui-checked': {color: amber[700]},
                  }} 
              />} 
            />
            ))}

          </RadioGroup>
      </FormControl>
    </div>
	);
};

export default CourseSorting;
