import React from 'react'
import {render, waitFor, screen} from '@testing-library/react'
import axios from 'axios'
import TestAxiosComponent from './TestAxiosComponent'

const mockAxios = axios as jest.Mocked<typeof axios>

jest.mock('axios')


describe('TestAxiosComponent', ()=>{
    test('render the data correctly.', async()=>{
        mockAxios.get.mockResolvedValue({data: 'Mocked Data'})

        render(<TestAxiosComponent/>)

        expect(screen.getByTestId('loading')).toBeInTheDocument()
        await waitFor(() => {
            expect(screen.getByTestId('data')).toBeInTheDocument();
          });
      
           expect(screen.getByTestId('data')).toHaveTextContent('Mocked Data');
    })
})

