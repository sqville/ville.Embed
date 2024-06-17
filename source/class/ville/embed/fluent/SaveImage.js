/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SaveImage",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 6.13v2.9a3.53 3.53 0 0 0-.5-.03H16V6.13a.97.97 0 0 0-.29-.72L13.6 3.3A.96.96 0 0 0 13 3V5.5a1.45 1.45 0 0 1-.44 1.06c-.14.13-.3.24-.48.32-.18.08-.38.12-.58.12h-4a1.45 1.45 0 0 1-1.05-.44 1.6 1.6 0 0 1-.33-.48A1.33 1.33 0 0 1 6 5.5V3H5a.97.97 0 0 0-.7.29c-.1.1-.17.2-.22.32A.86.86 0 0 0 4 4v10c0 .13.03.27.08.4.05.1.12.22.2.31.1.1.2.17.32.21.13.05.26.08.4.08v-4.5a1.45 1.45 0 0 1 .44-1.05c.14-.14.3-.25.48-.33.18-.08.38-.12.58-.12h6c-.96 0-1.82.38-2.45 1H6.5a.5.5 0 0 0-.5.5V15h3v1H5c-.26 0-.52-.05-.76-.16a2.2 2.2 0 0 1-.64-.42 1.9 1.9 0 0 1-.6-1.38V4c0-.26.05-.52.16-.76.1-.24.24-.45.42-.64A1.9 1.9 0 0 1 4.96 2h7.92c.26 0 .52.05.76.15.25.1.47.25.65.44L16.4 4.7c.19.19.34.4.43.65.1.24.16.5.16.77ZM7 3v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V3H7Zm3 9.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z",
    FILLED : "M5 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2v-5.5C5 9.67 5.67 9 6.5 9h10c.17 0 .34.01.5.04V5.62a2 2 0 0 0-.59-1.41L14.8 2.59A2 2 0 0 0 13.38 2H13v3.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 6 5.5V2H5Zm5.05 8A3.49 3.49 0 0 0 9 12.5V16H6v-5.5c0-.28.22-.5.5-.5h3.55ZM12 2H7v3.5c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V2Zm-2 10.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
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
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});