/**
 * OCC
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../config'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../config'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Occ);
  }
}(this, function(expect, Occ) {
  'use strict';

  var instance;
  const {user, address, titles, sampleProduct, payment} = Occ.default
  const entryNumber = 0
  var addressId
  var cartId
  var orderEntry

  before((done) => {
    Occ.default.ApiClient.instance.requestAccessToken()
      .then(done)
  })

  after((done) => {
    Occ.default.ApiClient.instance.clearAccessToken()
    done();
  })

  beforeEach(function() {
    instance = new Occ.default.UsersApi();
  });

  afterEach(function() {
    instance = new Occ.default.UsersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsersApi', function() {
    // create user
    describe('postUsers', function() {
      it('should call postUsers successfully', function(done) {
        instance.postUsers(user)
          .then(done)
          .catch((err) => {
            const error = JSON.parse(err.response.text).errors[0].type;
            if (error === "DuplicateUidError") done();
          })
      });
    });

    // post user address
    describe('postUserAddress', function() {
      it('should call postUserAddress successfully', function(done) {
        instance.postUserAddress(user.uid, address)
          .then((res) => {
            expect(res.firstName).to.equal(user.firstName)
            done();
          })
      });
    });

    // verify user address
    describe('postUserAddressesVerification', function() {
      it('should call postUserAddressesVerification successfully', function(done) {
        instance.postUserAddressesVerification(user.uid, address)
          .then(() => done())
      });
    });

    // get user address
    describe('getUserAddresses', function() {
      it('should call getUserAddresses successfully', function(done) {
        instance.getUserAddresses(user.uid)
          .then((res) => {
            expect(res).to.have.property('addresses')
            addressId = res.addresses[0].id
            done();
          })
      });
    });

    // GET 
    describe('getUserAddress', function() {
      it('should call getUserAddress successfully', function(done) {
        instance.getUserAddress(user.uid, addressId)
          .then((res) => {
            expect(res.id).to.be.equal(addressId)
            done();
          })
      });
    });

    // PUT
    describe('putUserAddress', function() {
      it('should call putUserAddress successfully', function(done) {
        address.line2 = 'PUT'
        instance.putUserAddress(user.uid, addressId, address)
          .then(() => instance.getUserAddress(user.uid, addressId))
          .then((res) => {
            expect(res.line2).to.equal('PUT')
            done();
          })
      });
    });

    // PATCH
    describe('patchUserAddress', function() {
      it('should call patchUserAddress successfully', function(done) {
        address.line2 = 'PATCH'
        instance.patchUserAddress(user.uid, addressId, {line2: 'PATCH'})
          .then(() => instance.getUserAddress(user.uid, addressId))
          .then((res) => {
            expect(res.line2).to.equal('PATCH')
            done();
          })
      });
    });

    // GET
    describe('getUser', function() {
      it('should call getUser successfully', function(done) {
        instance.getUser(user.uid)
          .then((res) => {
            expect(res.uid).to.equal(user.uid);
            done();
          })
      });
    });

    // PUT
    describe('putUser', function() {
      it('should call putUser successfully', function(done) {
        user.titleCode = titles[1].code
        instance.putUser(user.uid, user)
          .then(() => instance.getUser(user.uid))
          .then((res) => {
            expect(res.titleCode).to.equal(titles[1].code);
            done();
          })
      });
    });

    // PATCH
    describe('patchUser', function() {
      it('should call patchUser successfully', function(done) {
        instance.patchUser(user.uid, {titleCode: titles[2].code})
          .then(() => instance.getUser(user.uid))
          .then((res) => {
            expect(res.titleCode).to.equal(titles[2].code);
            done();
          })
      });
    });

    // POST, create cart by user id
    describe('postCart', function() {
      it('should call postCart successfully', function(done) {
        instance.postCart(user.uid)
          .then((res) => {
            expect(res).to.have.property('code')
            cartId = res.code
            done();
          })
      });
    });

    // POST, add entries to the cart
    describe('postCartEntries', function() {
      it('should call postCartEntries successfully', function(done) {
        instance.postCartEntries(user.uid,
          cartId,
          {product:{code: sampleProduct.code}, qty: 1}
        )
          .then((res) => {
            expect(res).to.have.property('product')
            done();
          })
      });
    });

    // GET, entries in the cart
    describe('getCartEntries', function() {
      it('should call getCartEntries successfully', function(done) {
        instance.getCartEntries(user.uid, cartId)
          .then((res) => {
            expect(res.orderEntries[entryNumber].product.code).to.equal(sampleProduct.code)
            orderEntry = res.orderEntries[entryNumber]
            done();
          })
      });
    });

    // GET, entry details 
    describe('getCartEntry', function() {
      it('should call getCartEntry successfully', function(done) {
        instance.getCartEntry(user.uid, cartId, entryNumber)
          .then((res) => {
            expect(res).to.eql(orderEntry)
            done();
          })
      });
    });

    // PUT, update entry, clear fields that is not in req body
    describe('putCartEntry', function() {
      it('should call putCartEntry successfully', function(done) {
        const updatedQuantity = 2
        orderEntry.quantity = updatedQuantity
        instance.putCartEntry(user.uid, cartId, entryNumber, orderEntry)
          .then((res) => {
            expect(res.quantity).to.equal(updatedQuantity)
            done();
          })
      });
    });

    // PATCH, update entry with certain fields
    describe('patchCartEntry', function() {
      it('should call patchCartEntry successfully', function(done) {
        const updatedQuantity = 3
        instance.patchCartEntry(user.uid, cartId, entryNumber, {quantity: 3})
          .then((res) => {
            expect(res.quantity).to.equal(updatedQuantity)
            done();
          })
      });
    });
    
    // POST apply voucher
    describe('postCartVoucher', function() {
      it('should call postCartVoucher successfully', function(done) {
        instance.postCartVoucher(user.uid, cartId, 'MAGIC')
          .then((res) => {
            done();
          })
      });
    });
    
    
    // GET applied voucher
    describe('getCartVouchers', function() {
      it('should call getCartVouchers successfully', function(done) {
        instance.getCartVouchers(user.uid, cartId)
          .then((res) => {
            expect(res).to.have.property('vouchers')
            done();
          })
      });
    });

    // DELETE apply voucher
    describe('deleteCartVouchers', function() {
      it('should call deleteCartVouchers successfully', function(done) {
        instance.deleteCartVouchers(user.uid, cartId, 'MAGIC')
          .then((res) => {
            done();
          })
      });
    });

    // // PUT Assigns an email to the guest cart
    // describe('putCartEmail', function() {
    //   it('should call putCartEmail successfully', function(done) {
    //     instance.putCartEmail(user.uid, cartId, {email: user.uid})
    //       .then((res) => {
    //         console.log(res)
    //         // expect(res).to.have.property('deliveryCost')
    //         // expect(res.code).to.equal('standard-gross')
    //         done();
    //       })
    //   });
    // });

    // GET, all carts by user id
    describe('getCarts', function() {
      it('should call getCarts successfully', function(done) {
        instance.getCarts(user.uid)
          .then((res) => {
            expect(res.carts[0].code).to.equal(cartId)
            done();
          })
      });
    });

    // GET, cart by user id and cart id
    describe('getCart', function() {
      it('should call getCart successfully', function(done) {
        instance.getCart(user.uid, cartId)
          .then((res) => {
            expect(res.code).to.equal(cartId)
            done();
          })
      });
    });

    describe('patchCartFlagForDeletion', function() {
      it('should call patchCartFlagForDeletion successfully', function(done) {
        instance.patchCartFlagForDeletion(user.uid, cartId)
          .then((res) => {
            expect(res).to.have.property('savedCartData')
            done();
          })
      });
    });

    // POST create and assign delivery address to cart
    describe('postCartDeliveryAddress', function() {
      it('should call postCartDeliveryAddress successfully', function(done) {
        instance.postCartDeliveryAddress(user.uid, cartId, address)
          .then((res) => {
            expect(res.firstName).to.equal(user.firstName)
            done();
          })
      });
    });

    // GET all delivery modes for cart
    describe('getCartDeliverymodes', function() {
      it('should call getCartDeliverymodes successfully', function(done) {
        instance.getCartDeliverymodes(user.uid, cartId)
          .then((res) => {
            expect(res).to.have.property('deliveryModes')
            done();
          })
      });
    });

    // PUT set delivery mode to cart
    describe('putCartDeliverymode', function() {
      it('should call putCartDeliverymode successfully', function(done) {
        instance.putCartDeliverymode(user.uid, cartId, 'standard-gross')
          .then((res) => {
            console.log(res)
            done();
          })
          .catch((err)=>console.log(err))
      });
    });

    // GET selected delivery mode of cart
    describe('getCartDeliverymode', function() {
      it('should call getCartDeliverymode successfully', function(done) {
        instance.getCartDeliverymode(user.uid, cartId)
          .then((res) => {
            expect(res).to.have.property('deliveryCost')
            expect(res.code).to.equal('standard-gross')
            done();
          })
      });
    });
    
    // PUT assign delivery address to cart
    describe('putCartDeliveryAddress', function() {
      it('should call putCartDeliveryAddress successfully', function(done) {
        instance.putCartDeliveryAddress(user.uid, cartId, addressId)
          .then(done)
          .catch((err)=>console.log(err))
      });
    });

    // // POST new credit card add to cart
    // // payment info is invalid?
    // describe('postCartPaymentdetail', function() {
    //   it('should call postCartPaymentdetail successfully', function(done) {
    //     console.log(payment)
    //     instance.postCartPaymentdetail(user.uid, cartId, payment)
    //       .then((res) => {
    //         console.log(res)
    //         expect(res.quantity).to.equal(updatedQuantity)
    //         done();
    //       })
    //       .catch((err)=>console.log(err))
    //   });
    // });

    // // PUT set payment details
    // describe('putCartPaymentdetail', function() {
    //   it('should call putCartPaymentdetail successfully', function(done) {
    //     //uncomment below and update the code to test putCartPaymentdetail
    //     //instance.putCartPaymentdetail(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });

    // // POST post order
    // describe('postOrder', function() {
    //   it('should call postOrder successfully', function(done) {
    //     //uncomment below and update the code to test postOrder
    //     //instance.postOrder(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });

    // GET user order history
    describe('getOrders', function() {
      it('should call getOrders successfully', function(done) {
        instance.getOrders(user.uid)
          .then((res) => {
            expect(res).to.have.property('orders')
            done();
          })
          .catch((err)=>console.log(err))
      });
    });

    // // GET order detail
    // describe('getOrder', function() {
    //   it('should call getOrder successfully', function(done) {
    //     //uncomment below and update the code to test getOrder
    //     //instance.getOrder(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });

    // DELETE, delete cart entry
    describe('deleteCartEntry', function() {
      it('should call deleteCartEntry successfully', function(done) {
        instance.deleteCartEntry(user.uid, cartId, entryNumber)
          .then((res) => {
            done();
          })
      });
    });

    // DELETE delivery address from cart
    describe('deleteCartDeliveryAddress', function() {
      it('should call deleteCartDeliveryAddress successfully', function(done) {
        instance.deleteCartDeliveryAddress(user.uid, cartId)
          .then(done)
      });
    });
    

    // // POST clone a cart
    // // TODO: fix 'cannot clone a saved cart'
    // describe('postCartClonesavedcart', function() {
    //   it('should call postCartClonesavedcart successfully', function(done) {
    //     instance.postCartClonesavedcart(user.uid, '00002110')
    //       .then((res) => {
    //         console.log(res)
    //         console.log(cartId)
    //         // expect(res.firstName).to.equal(user.firstName)
    //         done();
    //       })
    //       .catch((err)=>console.log(err))
    //   });
    // });

    // DELETE cart delivery mode
    describe('deleteCartDeliverymode', function() {
      it('should call deleteCartDeliverymode successfully', function(done) {
        instance.deleteCartDeliverymode(user.uid, cartId)
          .then(done)
      });
    });

    // DELETE cart
    describe('deleteCart', function() {
      it('should call deleteCart successfully', function(done) {
        instance.deleteCart(user.uid, cartId)
          .then((res) => {
            // expect(res.carts[0].guid).to.equal(cartId)
            done();
          })
      });
    });
    
    // DELETE user address by address id
    describe('deleteUserAddress', function() {
      it('should call deleteUserAddress successfully', function(done) {
        instance.deleteUserAddress(user.uid, addressId)
          .then(() => instance.getUserAddress(user.uid, addressId))
          .catch((err) => {
            const error = JSON.parse(err.response.text).errors[0]
            const message = `Address with given id: \'${addressId}\' doesn\'t exist or belong to another user`
            if (JSON.parse(err.response.text).errors[0].message === message) done();
          })
      });
    });

    // PUT update user password
    describe('putPassword', function() {
      it('should call putPassword successfully', function(done) {
        instance.putPassword(user.uid, {_new: user.password, old: `${user.password}!`})
          .then((res) => {
            done();
          })
      });
    });

    // DELETE user by user if
    describe('deleteUser', function() {
      it('should call deleteUser successfully', function(done) {
        instance.deleteUser(user.uid)
          .then(() => instance.getUser(user.uid))
          .then((res) => {
            done();
          })
      });
    });
  
    describe('getCartPromotions', function() {
      it('should call getCartPromotions successfully', function(done) {
        //uncomment below and update the code to test getCartPromotions
        //instance.getCartPromotions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCartPromotion', function() {
      it('should call postCartPromotion successfully', function(done) {
        //uncomment below and update the code to test postCartPromotion
        //instance.postCartPromotion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartPromotion', function() {
      it('should call getCartPromotion successfully', function(done) {
        //uncomment below and update the code to test getCartPromotion
        //instance.getCartPromotion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCartPromotion', function() {
      it('should call deleteCartPromotion successfully', function(done) {
        //uncomment below and update the code to test deleteCartPromotion
        //instance.deleteCartPromotion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchCartRestoresavedcart', function() {
      it('should call patchCartRestoresavedcart successfully', function(done) {
        //uncomment below and update the code to test patchCartRestoresavedcart
        //instance.patchCartRestoresavedcart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchSavedCart', function() {
      it('should call patchSavedCart successfully', function(done) {
        //uncomment below and update the code to test patchSavedCart
        //instance.patchSavedCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSavedCart', function() {
      it('should call getSavedCart successfully', function(done) {
        //uncomment below and update the code to test getSavedCart
        //instance.getSavedCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    
    
    describe('getCustomergroups', function() {
      it('should call getCustomergroups successfully', function(done) {
        //uncomment below and update the code to test getCustomergroups
        //instance.getCustomergroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putLogin', function() {
      it('should call putLogin successfully', function(done) {
        //uncomment below and update the code to test putLogin
        //instance.putLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });

    // describe('getPaymentdetail', function() {
    //   it('should call getPaymentdetail successfully', function(done) {
    //     //uncomment below and update the code to test getPaymentdetail
    //     //instance.getPaymentdetail(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });
    // describe('putPaymentdetail', function() {
    //   it('should call putPaymentdetail successfully', function(done) {
    //     //uncomment below and update the code to test putPaymentdetail
    //     //instance.putPaymentdetail(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });
    // describe('patchPaymentdetail', function() {
    //   it('should call patchPaymentdetail successfully', function(done) {
    //     //uncomment below and update the code to test patchPaymentdetail
    //     //instance.patchPaymentdetail(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });
    // describe('deletePaymentdetail', function() {
    //   it('should call deletePaymentdetail successfully', function(done) {
    //     //uncomment below and update the code to test deletePaymentdetail
    //     //instance.deletePaymentdetail(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });
    // describe('getPaymentdetails', function() {
    //   it('should call getPaymentdetails successfully', function(done) {
    //     //uncomment below and update the code to test getPaymentdetails
    //     //instance.getPaymentdetails(function(error) {
    //     //  if (error) throw error;
    //     //expect().to.be();
    //     //});
    //     done();
    //   });
    // });
  });

}));
