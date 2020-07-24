let newState = { ...state };

          // let array = newState.orders[index].tables;
          let new_array = {
            // Add Table info
            table_id: action.payload.id,
            table_name: action.payload.name,
            table_number: action.payload.number,
          };
          newState.orders[index].tables.concat(new_array);

          console.log(newState.orders[index].tables.concat(new_array));

          return newState;







          // Copy initial state
          let newState = { ...state };

          // Push new array into state copy
          newState.orders[index].tables.push({
            // Add Table info
            table_id: action.payload.id,
            table_name: action.payload.name,
            table_number: action.payload.number,
            // Add products array
            products: [],
          });
          // Return new update state
