# Redux Workshop

### All the boilerplate

---

## Why did we choose Redux?

- Abstraction of our state from our UI |
- Predictable behaviour |
- Immutability |
- Functional purity |

Note:
- Pushing state to the edges of our system
- Why not MV[?] - view updates model, which updates another model, which updates a view
- State is not changing unintentionally
- Pure functions - better reasoning about code, avoiding non-obvious dependencies

---

## Redux is not a black box

---?gist=gaearon/64e2c4adce2b4918c96c3db2b44d8f68&lang=javascript

@[22,26](Actions)
@[3-12](Reducer)

---

## The heart of redux

```javascript
/// Every action is just a plain old javascript object
{ type: 'something happened', value: 123456 }
```

---

## Start with the simplest thing that could possibly work

---?code=sample/actions/simplest-thing/index.js&lang=javascript

@[6-8](Directly reference dispatch from your onClick handler)
@[10-20](Connect your component to make dispatch available on props)

---

### To prevent string errors in our reducer code we could export a const

---?code=sample/actions/consts/index.js&lang=javascript

@[4,8-10]

---

### To share actions between components we could use an action creator

---?code=sample/actions/action-creators/actions.js&lang=javascript&title=actions.js

---?code=sample/actions/action-creators/index.js&lang=javascript&title=component.js

---

## What do Action Creators give us?

- Abstraction |
- Encapsulation |
- Separation of Concerns |
- Testability |

Note:
- components don’t need to know about the low-level details of the action
- all the details of an action are expressed in one place
- components remain dumb and are unaware of the framework in place to handle state
- the component can be tested with a simple mock, the action creator can be tested independently

---

## One step further - Flux Standard Actions

```javascript

///Basic flux standard action
{
	type: SIMPLE_ACTION,
	payload: {
		value: 123456,
	}
}

///Error action
{
	type: SIMPLE_ACTION,
	payload: new Error('Error in simple action'),
	error: true,
}

```
---