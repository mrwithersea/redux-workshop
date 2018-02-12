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

---?code=sample/actions/first_round/index.js&lang=javascript

@[4,8-10]

---