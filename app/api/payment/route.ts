// // import { NextResponse } from 'next/server'

// // import {
// //   APIContracts,
// //   APIControllers,
// // } from 'authorizenet'

// // export async function POST(req: Request) {
// //   try {
// //     const body = await req.json()

// //     const merchantAuthentication =
// //       new APIContracts.MerchantAuthenticationType()

// //     merchantAuthentication.setName(
// //       process.env.AUTHORIZE_API_LOGIN_ID!
// //     )

// //     merchantAuthentication.setTransactionKey(
// //       process.env.AUTHORIZE_TRANSACTION_KEY!
// //     )

// //     // CARD DETAILS
// //     const creditCard =
// //       new APIContracts.CreditCardType()

// //     creditCard.setCardNumber(body.cardNumber)

// //     creditCard.setExpirationDate(body.expiry)

// //     creditCard.setCardCode(body.cvv)

// //     // PAYMENT TYPE
// //     const paymentType =
// //       new APIContracts.PaymentType()

// //     paymentType.setCreditCard(creditCard)

// //     // TRANSACTION
// //     const transactionRequest =
// //       new APIContracts.TransactionRequestType()

// //     transactionRequest.setTransactionType(
// //       APIContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
// //     )

// //     transactionRequest.setPayment(paymentType)

// //     transactionRequest.setAmount(body.amount)

// //     // CREATE REQUEST
// //     const createRequest =
// //       new APIContracts.CreateTransactionRequest()

// //     createRequest.setMerchantAuthentication(
// //       merchantAuthentication
// //     )

// //     createRequest.setTransactionRequest(
// //       transactionRequest
// //     )

// //     return await new Promise((resolve) => {
// //       const controller =
// //         new APIControllers.CreateTransactionController(
// //           createRequest.getJSON()
// //         )

// //       controller.execute(() => {
// //         const apiResponse =
// //           controller.getResponse()

// //         const response =
// //           new APIContracts.CreateTransactionResponse(
// //             apiResponse
// //           )

// //         if (
// //           response &&
// //           response.getMessages().getResultCode() === 'Ok'
// //         ) {
// //           resolve(
// //             NextResponse.json({
// //               success: true,
// //               transactionId:
// //                 response
// //                   .getTransactionResponse()
// //                   ?.getTransId(),
// //             })
// //           )
// //         } else {
// //           resolve(
// //             NextResponse.json({
// //               success: false,
// //               error:
// //                 response
// //                   ?.getMessages()
// //                   ?.getMessage()?.[0]
// //                   ?.getText() ||
// //                 'Payment Failed',
// //             })
// //           )
// //         }
// //       })
// //     })
// //   } catch (error) {
// //     return NextResponse.json({
// //       success: false,
// //       error: 'Server Error',
// //     })
// //   }
// // }

// import { NextResponse } from 'next/server'

// import {
//   APIContracts,
//   APIControllers,
// } from 'authorizenet'

// import { createClient } from '@supabase/supabase-js'

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()

//     const merchantAuthentication =
//       new APIContracts.MerchantAuthenticationType()

//     merchantAuthentication.setName(
//       process.env.AUTHORIZE_API_LOGIN_ID!
//     )

//     merchantAuthentication.setTransactionKey(
//       process.env.AUTHORIZE_TRANSACTION_KEY!
//     )

//     // CARD
//     const creditCard =
//       new APIContracts.CreditCardType()

//     creditCard.setCardNumber(body.cardNumber)

//     creditCard.setExpirationDate(body.expiry)

//     creditCard.setCardCode(body.cvv)

//     // PAYMENT TYPE
//     const paymentType =
//       new APIContracts.PaymentType()

//     paymentType.setCreditCard(creditCard)

//     // TRANSACTION
//     const transactionRequest =
//       new APIContracts.TransactionRequestType()

//     transactionRequest.setTransactionType(
//       APIContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
//     )

//     transactionRequest.setPayment(paymentType)

//     transactionRequest.setAmount(body.amount)

//     // REQUEST
//     const createRequest =
//       new APIContracts.CreateTransactionRequest()

//     createRequest.setMerchantAuthentication(
//       merchantAuthentication
//     )

//     createRequest.setTransactionRequest(
//       transactionRequest
//     )

//     return await new Promise((resolve) => {
//       const controller =
//         new APIControllers.CreateTransactionController(
//           createRequest.getJSON()
//         )

//       controller.execute(async () => {
//         const apiResponse =
//           controller.getResponse()

//         const response =
//           new APIContracts.CreateTransactionResponse(
//             apiResponse
//           )

//         if (
//           response &&
//           response.getMessages().getResultCode() === 'Ok'
//         ) {
//           const transactionId =
//             response
//               .getTransactionResponse()
//               ?.getTransId()

//           // SAVE TO SUPABASE
//           await supabase.from('payments').insert([
//             {
//               user_email: body.email,
//               amount: body.amount,
//               status: 'Paid',
//               transaction_id: transactionId,
//             },
//           ])

//           resolve(
//             NextResponse.json({
//               success: true,
//               transactionId,
//             })
//           )
//         } else {
//           resolve(
//             NextResponse.json({
//               success: false,
//               error: 'Payment Failed',
//             })
//           )
//         }
//       })
//     })
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       error: 'Server Error',
//     })
//   }
// }

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // IMPORTANT
)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { email, amount } = body

    const { data, error } = await supabase
      .from('payments')
      .insert([
        {
          email,
          amount,
          status: 'success',
        },
      ])
      .select()

    if (error) {
      console.log('SUPABASE ERROR:', error)

      return NextResponse.json({
        success: false,
        error: error.message,
      })
    }

    return NextResponse.json({
      success: true,
      data,
    })
  } catch (err: any) {
    console.log(err)

    return NextResponse.json({
      success: false,
      error: err.message,
    })
  }
}