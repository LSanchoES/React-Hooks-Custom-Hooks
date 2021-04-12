### React HOOKS + 3 CUSTOM HOOKS

#  Este repositorio contiene ejemplos de:

- useState
- useEffect
- useRef
- useLayoutEffect
- React.memo
- useReducer
- useContex

# También 3 custom hooks para su uso en futuros proyectos:

- useCounter

``` 
    const { counter, increment, decrement, reset } = useCounter(10)


    useCounter() //recibe un valor por defecto
    
```

- useFetch

``` 

    const url = 'endpoint from api' ;
    const { data: null, loading: true, error: null} = useFetch(url)

```

- useForm

```

    const initialForm = {

        name: '',
        age: 0,
        email: ''
    }


    const [ formValues, handleInputChange, reset] = useForm (initialForm);

```