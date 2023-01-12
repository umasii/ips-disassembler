var offset = `      `;

module.exports = {
    0x00: {
        // m(n, M(n) + M(n))
        name: 'ADD',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('ADD' + offset + val1 + + val2 + '->' + ' reg' + reg1);
        },
    },
    0x01: {
        // m(n, M(n) - M(n))
        name: 'SUBTRACT',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('SUBTRACT' + offset + val1 + ' - ' + val2 + ' -> reg' + reg1);
        }
    },
    0x02: {
        // m(n, M(n) * M(n))
        name: 'MULTIPLY',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('MULTIPLY' + offset + val1 + ' * ' + val2 + ' -> reg' + reg1);
        }
    },
    0x03: {
        // m(n, M(n) / M(n))
        name: 'DIVIDE',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('DIVIDE' + offset + val1 + ' / ' + val2 + ' -> reg' + reg1);
        }
    },
    0x04: {
        // m(n, M(n) % M(n))
        name: 'MOD',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('MOD' + offset + val1 + ' % ' + val2 + ' -> reg' + reg1);
        }
    },
    0x05: {
        // m(n, +M(n))
        name: 'NUMBER',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('NUMBER' + offset + val1 + ' -> reg' + reg1);
        }
    },
    0x06: {
        // m(n, !M(n))
        name: 'NOT',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('NOT' + offset + val1 + ' -> reg' + reg1);
        }
    },
    0x07: {
        // m(n, M(n) >> M(n))
        name: 'RSHIFT',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('RSHIFT' + offset + val1 + ' >> ' + val2 + ' -> reg' + reg1);
        }
    },
    0x08: {
        // m(n, M(n) << M(n))
        name: 'LSHIFT',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('LSHIFT' + offset + val1 + ' << ' + val2 + ' -> reg' + reg1);
        }
    },
    0x09: {
        // m(n, M(n) >>> M(n))
        name: 'USHIFT',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('USHIFT' + offset + val1 + ' >>> ' + val2 + ' -> reg' + reg1);
        }
    },
    0x0A: {
        // m(n, M(n) | M(n))
        name: 'OR',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('OR' + offset + val1 + ' | ' + val2 + ' -> reg' + reg1);
        }
    },
    0x0B: {
        // m(n, M(n) & M(n))
        name: 'AND',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('AND' + offset + val1 + ' & ' + val2 + ' -> reg' + reg1);
        }
    },
    0x0C: {
        // m(n, M(n) ^ M(n))
        name: 'XOR',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('XOR' + offset + val1 + ' ^ ' + val2 + ' -> reg' + reg1);
        }
    },
    0x0D: {
        // m(n, ~M(n))
        name: 'INVERT',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('INVERT' + offset + val1 + ' -> reg' + reg1);
        }
    },
    0x0E: {
        // m(n, M(n))
        name: 'SET',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('SET' + offset + val1 + ' -> reg' + reg1);
        }
    },
    0x0F: {
        // m(n, window)
        name: 'PUSH WINDOW',
        do: function (disassembler) {
            let reg1 = disassembler.getRegister();
            // state.register[reg1] = state.window;
            disassembler.state.trace.push('PUSH WINDOW' + offset + ' -> reg' + reg1);
        }
    },
    0x10: {
        // m(n, M(n)[M(n)])
        name: 'GET',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('GET' + offset + val1 + '[' + val2 + '] -> reg' + reg1);
        }
    },
    0x11: {
        // M(n)[M(n)] = M(n)
        name: 'PUT',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            val3 = disassembler.getValue();
            disassembler.state.trace.push('PUT' + offset + val1 + '[' + val2 + '] = ' + val3);
        }
    },
    0x12: {
        // m(n, window[M(n)])
        name: 'GET WINDOW PROP',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('GET WINDOW PROP' + offset + val1 + ' -> reg' + reg1);
        }
    },
    0x13: {
        // m(n, M(n) in M(n))
        name: 'IN',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('IN' + offset + val1 + ' in' + val2 + ' -> reg' + reg1);
        }
    },
    0x14: {
        // m(n, delete M(n)[M(n)])
        name: 'DELETE',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('DELETE' + offset + val1 + '[' + val2 + '] -> reg' + reg1);
        }
    },
    0x15: {
        // m(n, M(n) instanceof M(n))
        name: 'INSTANCEOF',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('INSTANCEOF' + offset + val1 + ' instanceof ' + val2 + ' -> reg' + reg1);
        }
    },
    0x16: {
        // m(n, typeof M(n))
        name: 'TYPEOF',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('TYPEOF' + offset + val1 + ' -> reg' + reg1);
        }
    },
    0x17: {
        /* 
        var t = M(n)
            , r = M(n)
            , i = M(n);
        if (void 0 === t && j() && (t = a),
            r[v] && r[v].L === r) {
            n.g = [r[v].T, {
                h: t,
                M: r,
                g: d(n.g, h),
                j: d(h(), h),
                $: [],
                O: r[v].O
            }, void 0, function () {
                return arguments
            }
                .apply(void 0, F(i))];
            for (var o = 0; o < i.length; o++)
                n.g.push(i[o])
        } else if (r.toString)
            n.g[2] = r.apply(t, i);
        else {
            var u = !1
                , e = j();
            if (e && e.console)
                for (var f = Object.keys(e.console), c = 0; c < f.length; c++)
                    if (r === e.console[f[c]]) {
                        u = !0,
                            n.g[2] = r(i);
                        break
                    }
            u || (n.g[2] = r.apply(t, i))
        }
        */
        name: 'CALL FUNCTION: ',
        reads: 3,
        writes: 0,
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let val3 = disassembler.getValue();
            if (val1 == undefined) {
                disassembler.state.trace.push('CALL FUNCTION' + offset + "PTR: " + val2 + ' MEM: ' + val3);
            } else {
                disassembler.state.trace.push('CALL FUNCTION' + offset + 'OBJ: ' + val1 + ' FUNC: ' + val2 + ' ARGS: ' + val3);
            }
        }
    },
    0x18: {
        /* var t = M(n)
            , r = M(n).slice();
        r.unshift(void 0),
            m(n, new (Function.bind.apply(t, r))) */
        name: 'BIND APPLY',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push("BIND APPLY" + offset + val1 + " " + val2 + " -> " + reg1);
        }
    },
    0x19: {
        // m(n, {})
        name: 'EMPTY OBJECT',
        do: function (disassembler) {
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('EMPTY OBJECT      -> reg' + reg1);
        }
    },
    0x1A: {
        // m(n, [])
        name: 'EMPTY ARRAY',
        do: function (disassembler) {
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('EMPTY ARRAY      -> reg' + reg1);
        }
    },
    0x1B: {
        // m(n, new Array(M(n)))
        name: 'NEW ARRAY',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('NEW ARRAY' + offset + val1 + ' -> reg' + reg1);
        }
    },
    0x1C: {
        // m(n, new RegExp(M(n), M(n)))
        name: 'NEW REGEXP',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('NEW REGEXP' + offset + val1 + ', ' + val2 + ' -> reg' + reg1);
        }
    },
    0x1D: {
        /* var t, r = [];
           for (t in M(n))
               r.push(t);
           m(n, r) */
        name: 'COPY ENUMERABLE',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('COPY ENUMERABLE' + offset + val1 + ' -> reg' + reg1);
        }
    },
    0x1E: {
        // m(n, M(n) == M(n))
        name: 'EQUAL',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('EQUAL' + offset + val1 + ' == ' + val2 + ' -> reg' + reg1);
        }
    },
    0x1F: {
        // m(n, M(n) === M(n))
        name: 'STRICTLY EQUAL',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('STRICT EQUAL' + offset + val1 + ' === ' + val2 + ' -> reg' + reg1);
        }
    },
    0x20: {
        // m(n, M(n) != M(n))
        name: 'NOT EQUAL',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('NOT EQUAL' + offset + val1 + ' != ' + val2 + ' -> reg' + reg1);
        }
    },
    0x21: {
        // m(n, M(n) !== M(n))
        name: 'STRICTLY NOT EQUAL',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('STRICT NOT EQUAL' + offset + val1 + ' !== ' + val2 + ' -> reg' + reg1);
        },
    },
    0x22: {
        // m(n, M(n) < M(n))
        name: 'LESS THAN',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('LESS THAN' + offset + val1 + ' < ' + val2 + ' -> reg' + reg1);
        }
    },
    0x23: {
        /* var t = M(n);
           m(n, M(n) < t) */
        name: 'GREATER THAN',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('GREATER THAN' + offset + val1 + ' > ' + val2 + ' -> reg' + reg1);
        }
    },
    0x24: {
        // m(n, M(n) <= M(n))
        name: 'LESS THAN OR EQUAL',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('LESS THAN OR EQUAL' + offset + val1 + ' <= ' + val2 + ' -> reg' + reg1);
        }
    },
    0x25: {
        /* var t = M(n);
           m(n, M(n) <= t) */
        name: 'GREATER THAN OR EQUAL',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('GREATER THAN OR EQUAL' + offset + val1 + ' >= ' + val2 + ' -> reg' + reg1);
        }
    },
    0x26: {
        // n.g[0] = M(n)
        name: 'JUMP',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            if (disassembler.mode == "step") {
                disassembler.state.ptr = val1;
            }
            disassembler.state.trace.push('JUMP' + offset + val1);
        }
    },
    0x27: {
        // M(n) ? M(n) : n.g[0] = M(n)
        name: 'JUMP IF FALSE',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            disassembler.state.trace.push('JUMP IF FALSE' + offset + val1 + ' TO: ' + val2 + " | " + disassembler.state.ptr);
            if (disassembler.mode == "step") {
                disassembler.branch(val2)
                disassembler.branch(disassembler.state.ptr)
                disassembler.shouldStop = true;
            }
        }
    },
    0x28: {
        // M(n) ? n.g[0] = M(n) : M(n)
        name: 'JUMP IF TRUE',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            disassembler.state.trace.push('JUMP IF TRUE' + offset + val1 + ' TO: ' + val2 + " | " + disassembler.state.ptr);
            if (disassembler.mode == "step") {
                disassembler.branch(val2)
                disassembler.branch(disassembler.state.ptr)
                disassembler.shouldStop = true
            }
        }
    },
    0x29: {
        /* var t = M(n)
               , r = M(n);
           p(n).$[t] = r */
        name: 'SET MEMORY ELEMENT',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            disassembler.state.trace.push('SET MEMORY ELEMENT' + offset + val1 + ' = ' + val2);
        }
    },
    0x2A: {
        /* var t = M(n);
           p(n).$[t] = void 0 */
        name: 'INIT MEMORY ELEMENT',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            disassembler.state.trace.push('INIT MEMORY ELEMENT' + offset + val1);
        }
    },
    0x2B: {
        /* var t = M(n)
               , n = p(n)
               , r = n.M;
           n.$[t] = r */
        name: 'INHERIT CALLER',
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            disassembler.state.trace.push('INHERIT CALLER' + offset + val1);
        }
    },
    0x2C: {
        /* 
        for (var t = M(n), r = M(n), i = p(n); i; i = i.O())
            if (t in i.$)
                return void (i.$[t] = r);
        for (var o = p(n); o; o = o.O())
            if (t in o.$)
                return void (o.$[t] = r);
        throw 'Â¯\\_(ãƒ„)_/Â¯' 
        */
        name: "SET MEMORY ELEMENT IF INIT",
        reads: 2,
        writes: 0,
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            disassembler.state.trace.push('SET MEMORY ELEMENT IF INIT' + offset + val1 + ' = ' + val2);
        }
    },
    0x2D: {
        /* for (var t = M(n), r = p(n); r; r = r.O())
               if (t in r.$)
                   return void m(n, r.$[t]);
           throw '¯\\_(ツ)_/¯' */
        name: "PUSH MEMORY ELEMENT IF INIT",
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('PUSH MEMORY ELEMENT IF INIT' + offset + val1 + ' -> reg' + reg1);
        }
    },
    0x2E: {
        // m(n, n.g[1].h)
        name: "PUSH H",
        do: function (disassembler) {
            // let val1 = state.register[1].h
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('PUSH H' + offset + ' -> reg' + reg1);
        }
    },
    0x2F: {
        // O(n, M(n))
        name: "HANDLE TRACE",
        reads: 1,
        writes: 0,
        do: function (disassembler) {
            if (disassembler.state == "step") {
                disassembler.shouldStop = true;
            }
            let val1 = disassembler.getValue();
            disassembler.state.trace.push("HANDLE ERROR" + offset + val1)
        }

    },
    0x30: {
        // w(n, M(n))
        name: "JUMP OR RETURN VAL",
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            disassembler.state.trace.push('JUMP OR RETURN VAL' + offset + val1);
            if (disassembler.mode == "step") {
                disassembler.shouldStop = true;
            }
        }

    },
    0x31: {
        // w(n, void 0)
        name: "JUMP OR RETURN",
        do: function (disassembler) {
            disassembler.state.trace.push('JUMP OR RETURN');
            if (disassembler.mode == "step") {
                disassembler.shouldStop = true;
            }
        }

    },
    0x32: {
        /* var r = M(n)
             , t = M(n)
             , i = M(n)
             , o = p(n)
             , u = function () {
                 var n = $();
                 n.g[3] = arguments;
                 for (var t = 0; t < arguments.length; t++)
                     n.g[t + 4] = arguments[t];
                 return n.g[1] = {
                     h: this,
                     g: function () {
                         return [0]
                     },
                     j: function () {
                         return [0]
                     },
                     $: [],
                     O: d(o, l),
                     M: u
                 },
                     n.g[0] = r,
                     S(n),
                     n.g[2]
             };
         try {
             Object.defineProperty(u, "length", {
                 value: i
             }),
                 Object.defineProperty(u, "name", {
                     value: t
                 })
         } catch (n) {
             for (var e = !1, f = "", c = 0; c < i; c++)
                 e ? f += ",a".concat(c) : (f += "a".concat(c),
                     e = !0);
             u = eval("(function(fn){" + "return function ".concat(t, "(").concat(f, "){return fn.apply(this, arguments)}") + "})")(u)
         }
         u[v] = {
             T: r,
             O: d(o, l),
             L: u
         },
             m(n, u) */
        name: "INIT FUNCTION STATE",
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            let val2 = disassembler.getValue();
            val3 = disassembler.getValue();
            let reg1 = disassembler.getRegister();
            if (disassembler.mode == "step") {
                disassembler.function(val1)
            }
            disassembler.state.trace.push('INIT FUNCTION STATE' + offset + 'PTR: ' + val1 + ' NAME: ' + val2 + ' LEN: ' + val3 + ' -> reg' + reg1);
        }
    },
    0x33: {
        /* var t = M(n);
           n.g[1].I = t */
        name: "SET I",
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            if (val1 !== "null" && disassembler.mode == "step") {
                disassembler.branch(val1)
            } disassembler.state.trace.push('SET I' + offset + val1);
        }
    },
    0x34: {
        /* var t = M(n);
           n.g[1].N = t */
        name: "SET N",
        do: function (disassembler) {
            let val1 = disassembler.getValue();
            if (val1 !== "null" && disassembler.mode == "step") {
                disassembler.branch(val1)
            }
            disassembler.state.trace.push('SET N' + offset + val1);
        }
    },
    0x35: {
        // m(n, n.F && n.F.k)
        name: "PUSH F.K",
        do: function (disassembler) {
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('PUSH F.K      -> reg' + reg1);
        }

    },
    0x36: {
        // n.F = void 0
        name: "VOID F",
        do: function (disassembler) {
            // state.F = undefined;
            disassembler.state.trace.push('VOID F');
        }
    },
    0x37: {
        /* 
         n.F ? O(n, n.F.k) : (t = p(n)).C && w(n, t.C.k)
         if (n.F){
            O(n, n.F.k)
         }else{
            (t = p(n)).C && w(n, t.C.k)
         }
        */
        name: "HANDLE TRACE OR LOOP OR RETURN C",
        do: function (disassembler) {
            if (disassembler.state == "step") {
                disassembler.shouldStop = true;
            }
            disassembler.state.trace.push("HANDLE TRACE OR JUMP OR RETURN C")
        }

    },
    0x38: {
        // null
        name: "NULL",
        do: null
    },
    0x39: {
        // m(n, t.inj0)
        name: "PROMISE",
        do: function (disassembler) {
            let reg1 = disassembler.getRegister();
            disassembler.state.trace.push('PROMISE      -> reg' + reg1);
        }
    }
}