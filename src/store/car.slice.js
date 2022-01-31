import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {carsService} from "../services";


export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',/*обов'язкове полеб рекомендованоЖназва слайсу/назва ф-ції*/
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
    async ({data}, {dispatch,rejectWithValue}) => {
        try {
            const newCar = await carsService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch,rejectWithValue}) => {
        try {
            await carsService.deleteById(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCarThunk',
    async ({id,car}, {rejectWithValue}) => {
        try {
            const updatedCar = await carsService.updateById(id, car);
            return {car: updatedCar}
        }catch (e) {
            return rejectWithValue(e.message);
        }

    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null,
        carForUpdate: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
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
        },
        [updateCarThunk.fulfilled]:(state, action)=>{
            const index = state.cars.findIndex(car=>car.id === action.payload.car.id);
            state.cars[index] = action.payload.car
            state.carForUpdate = null
        }
    }
})


const carReducer = carSlice.reducer;

export const {addCar, deleteCar, carToUpdate} = carSlice.actions;

export default carReducer;




