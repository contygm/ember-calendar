var data = {};
var id = 1;

// setting options to obj by deafult handles
// when no options var is passed in
module.exports = function (type, options = {}) {
  var hasMany = options.hasMany;
  console.log('type', type);
  data[type] = [];

  const all = () => data[type];
  const get = id => data[type]
    .filter(item => item.id === parseInt(id, 10))[0];

  const insert = (obj, parent) => {
    obj.id = id++;
    console.log('obj', obj);
    console.log('parent', parent);
    if (hasMany) obj[hasMany] = [];
    if (parent) parent[type].push(obj.id);
    data[type].push(obj);
    return obj;
  }

  const update = (id, attrs) => {
    return Object.assign(get(id), attrs);
  }

  const remove = id => {
    data[type] = data[type].filter(item => item.id !== parseInt(id, 10));
  }

  const res = item => {
    console.log('type', type);
    let obj = {
      type,
      id: item.id,
      attributes: item,
      relationships: {},
    };

    if (hasMany) {
      obj.relationships[hasMany + 's'] = {
        data: item[hasMany].map(id => ({ id, type: hasMany })),
      }
    }
    return obj;
  };

  return {
    get,
    all,
    insert,
    update,
    remove,
    res
  };
};
