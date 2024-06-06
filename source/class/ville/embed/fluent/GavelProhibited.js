/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GavelProhibited",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M6.44 5.28a1.5 1.5 0 0 0 .22 2.31l1.77 1.18-5.85 5.86a1.98 1.98 0 1 0 2.8 2.8l3.67-3.69c.12-.83.42-1.6.86-2.27l-5.24 5.24a.98.98 0 0 1-1.38-1.38l5.99-5.99.74.5c.06.04.1.08.14.14l.43.65c.24-.24.5-.46.78-.65l-.38-.56a1.5 1.5 0 0 0-.41-.41L8.87 7.86l3.04-3.04 1.22 1.7c.1.14.21.25.34.35l1.7 1.22-.9.91a5.58 5.58 0 0 1 1.31.1L16 8.7l.79.56a.5.5 0 0 1 .2.35c.33.16.63.36.91.58a1.5 1.5 0 0 0-.53-1.74l-3.31-2.39a.5.5 0 0 1-.12-.1l-2.38-3.32a1.5 1.5 0 0 0-2.28-.19L6.44 5.28Zm.78 1.48a.5.5 0 0 1-.07-.77l2.84-2.84a.5.5 0 0 1 .76.06l.56.79-3.3 3.3-.79-.54ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z";
   var pathdfilled = "M6.67 7.59a1.5 1.5 0 0 1-.23-2.3l2.84-2.85a1.5 1.5 0 0 1 2.28.19l.47.65L7.3 8.01l-.63-.42Zm1.48 1 4.47-4.49 1.33 1.84a.5.5 0 0 0 .1.11l1.85 1.33L14.27 9a5.48 5.48 0 0 0-3.67 1.63l-.44-.65a.5.5 0 0 0-.14-.14L8.15 8.58Zm7.43.52c.87.17 1.66.54 2.32 1.07a1.5 1.5 0 0 0-.53-1.74l-.65-.47-1.14 1.14ZM9.3 12.69c.16-.45.37-.87.63-1.26l-.55-.81-1.2-.8-5.77 5.77a1.41 1.41 0 1 0 2 2l4.9-4.9Zm.7 1.81a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});