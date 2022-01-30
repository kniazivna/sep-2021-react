import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {carsService} from "../sevices";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carsService.getAll();
            return cars;
        } catch (e) {
return rejectWithValue(e.message);
        }

    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carsService.create(data);
            dispatch(addCar({data:newCar}))
        }catch (e) {
          console.log(e);
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch}) =>{
        try {
            await carsService.deleteById(id);
            dispatch(deleteCar({id}))
        }catch (e){
            console.log(e);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }

    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'Loading/pending';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})


const carReducer = carSlice.reducer;

export const {addCar, deleteCar} = carSlice.actions;

export default carReducer;




