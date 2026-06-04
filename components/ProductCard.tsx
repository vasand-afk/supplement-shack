import Link from "next/link";
import { Product } from "@/lib/products";

const badgeStyles: Record<string, string> = {
  "Best Seller": "bg-[#EA580C] text-white",
  "New": "bg-[#16A34A] text-white",
  "Lab Verified": "bg-[#2563EB] text-white",
  "Bundle Deal": "bg-[#D97706] text-white",
  "RUO": "bg-[#7C3AED] text-white",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-[#EA580C]" : "text-[#3F3F46]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-[#A1A1AA] ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const categoryPath =
    product.category === "peptides-ruo"
      ? "/shop/peptides/ruo"
      : `/shop/${product.category}`;

  return (
    <div className="bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden card-hover flex flex-col">
      {/* Product image area */}
      <div className="relative h-48 bg-gradient-to-br from-[#27272A] to-[#18181B] flex items-center justify-center">
        <span className="text-7xl">{product.emoji}</span>
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-sm">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Brand + Name */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA] mb-1">
            {product.brand}
          </p>
          <h3 className="font-bold text-[#FAFAFA] text-sm leading-tight line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-[#52525B]">({product.reviews})</span>
        </div>

        {/* Description */}
        <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Servings */}
        <p className="text-xs text-[#52525B]">
          {product.category === "peptides-ruo" ? "Per vial" : `${product.servings} servings`}
        </p>

        {/* Price + CTA */}
        <div className="flex items-end justify-between mt-auto pt-2 border-t border-[#27272A]">
          <div>
            <p className="text-lg font-black text-[#FAFAFA]">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-xs text-[#16A34A] font-semibold">
              ${product.subscribePrice.toFixed(2)} subscribe &amp; save
            </p>
          </div>
          <Link
            href={`${categoryPath}#${product.id}`}
            className="px-4 py-2 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold rounded-lg transition-colors"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
