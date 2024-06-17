/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WhiteboardOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h10l.28-.01 1.87 1.86a.5.5 0 0 0 .7-.7l-15-15ZM14.3 15H5a2 2 0 0 1-2-2V9.23c.57-.49 1.34-1.11 2.07-1.54.41-.23.78-.38 1.07-.43.28-.05.42 0 .5.1.08.07.1.13.11.18.01.06 0 .15-.04.27-.1.28-.3.6-.6 1.02l-.1.13c-.25.35-.53.74-.73 1.14-.22.45-.4 1-.2 1.56.17.5.5.84.92 1 .4.17.85.15 1.24.08a6.5 6.5 0 0 0 2.02-.81.5.5 0 0 0-.52-.86c-.4.24-1.07.58-1.68.69-.3.05-.53.04-.7-.02-.13-.06-.26-.16-.34-.4-.06-.19-.03-.43.15-.8.16-.31.4-.64.66-1l.1-.13c.23-.34.5-.72.67-1.1L14.3 15ZM5.64 6.35c-.36.1-.72.28-1.07.48-.54.31-1.1.72-1.57 1.1V7a2 2 0 0 1 1.39-1.9l1.25 1.25Zm7.4 4.02-.42.13-.8-.8.93-.28a.9.9 0 0 0 .38-.23l3.6-3.62a.93.93 0 0 0 .06-1.24l-.06-.06-.06-.06a.9.9 0 0 0-1.22.06l-3.61 3.62a.9.9 0 0 0-.23.37l-.3.93-.79-.8.14-.44c.1-.29.25-.55.47-.76l3.6-3.63a1.9 1.9 0 0 1 2.6-.1l.11.1.1.11c.64.76.61 1.9-.1 2.6l-3.6 3.63c-.22.22-.5.38-.8.47Zm4.14 4.69-.7-.7A2 2 0 0 0 17 13V8.14l1-1V13c0 .8-.31 1.52-.82 2.06ZM6.12 4l1 1h4.77l1-1H6.12Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7L3.5 4.21A2.5 2.5 0 0 0 2 6.5v2.26c.52-.48 1.12-.98 1.72-1.4.63-.45 1.3-.84 1.92-1.02L7.6 8.3c-.08.18-.17.34-.26.5-.17.26-.38.55-.58.82l-.02.04c-.21.29-.42.58-.61.88-.16.28-.2.62-.13.86.03.12.1.2.17.27.07.06.19.12.37.13.33.03.76-.08 1.3-.27a.5.5 0 1 1 .33.94 4.2 4.2 0 0 1-1.71.33 1.52 1.52 0 0 1-1.41-1.12 2.19 2.19 0 0 1 .21-1.65h.01v-.01c.22-.34.45-.66.66-.95l.01-.02c.21-.29.4-.54.55-.78.32-.53.3-.73.22-.84a.4.4 0 0 0-.25-.17 1.08 1.08 0 0 0-.5.03c-.47.12-1.04.44-1.66.88-.85.6-1.7 1.38-2.3 1.98v3.35A2.5 2.5 0 0 0 4.5 16h10.8l1.85 1.85a.5.5 0 0 0 .7-.7l-15-15Zm8.4 9.8a1.84 1.84 0 0 1-2.2-2.2l2.2 2.2Zm-.73-3.55 2.1 2.1.42-.13c.3-.09.58-.25.8-.47l3.6-3.62c.71-.71.74-1.85.1-2.6l-.1-.12-.1-.1a1.9 1.9 0 0 0-2.6.1L11.13 7.2a1.9 1.9 0 0 0-.47.76l-.14.45Zm6.8 6.8-3.9-3.9c.43-.14.8-.38 1.13-.7L18 7.13v6.37a2.5 2.5 0 0 1-.67 1.7ZM6.13 4l3.6 3.6c.15-.42.38-.8.7-1.12L12.89 4H6.12Z"
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